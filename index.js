const fs = require('fs');
const translate = require('@vitalets/google-translate-api');
const languages = [
    'fr',
    'es',
    'de',
    'it'
];

let sample;
let resources;

try {
    inputFileContents = fs.readFileSync('./sample.js', 'utf8');
} catch (e) {
    console.log('Error: file \'sample.js\' is missing');
    process.exit();
}

try {
    resources = eval(`${inputFileContents}; module.exports = resources`);
} catch (e) {
    console.log('Error: file \'sample.js\' is not formatted properly');
    process.exit();
}

const keysIncludeAnyLang = (keys) => {
    return languages.some(lang => keys.includes(lang));
}

const parseNode = (() => {
    let total = 0;
    let completed = 0;

    const updateBar = () => {
        let percentage = 0;
        if(total) {
            percentage = completed/total;
        } else {
            percentage = 0;
        }
        // bar.update(percentage*100);
        console.log({completed, total, percentage});
    }

    return async(node) => {
        const keys = Object.keys(node);
        if(keys.includes('en')) {
            await Promise.all(languages.map(async(to) => {
                try {
                    total++;
                    updateBar();
                    const translationResult = await translate(node['en'], {from: 'en', to});
                    node[to] = translationResult.text;
                    completed++;
                    updateBar();
                } catch (e) {
                    console.log('translate API Error', e);
                }
            }))
        } else if(keysIncludeAnyLang(keys)) {
            node.en = '';
            languages.forEach(lang => {
                if(!node[lang]) {
                    node[lang] = '';
                }
            })
        } else {
            await Promise.all(keys.map(async(key) =>
                parseNode(node[key])
            ));
        }
    }
})();

const nodeToText = (node, depth = 0, keyName = 'const resources =') => {
    const keys = Object.keys(node);
    let text = '';

    if(node.length) {

        text += `${'    '.repeat(depth)}${keyName} '${node.replace("'", "\\'")}',
`;

    } else {

        text = `${'    '.repeat(depth)}${keyName} {
`;
        keys.forEach(key => {
            text += nodeToText(node[key], depth+1, `${key}:`)
        })

        text += `${'    '.repeat(depth)}},
`;

    }
    
    return text;
}

(async() => {
    await parseNode(resources);
    fs.writeFileSync('./output.js', nodeToText(resources));    
})();

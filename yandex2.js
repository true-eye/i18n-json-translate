const fs = require('fs');
// const translate = require('yandex-translate')('trnsl.1.1.20191128T021239Z.dfea86bc64be6547.1202fda3c37933120a4ede7ed57d050e3274d7bd');
const YandexTranslate = require('yandex-translate-async').default;

const translate = new YandexTranslate({
    apiKey: 'trnsl.1.1.20191128T021239Z.dfea86bc64be6547.1202fda3c37933120a4ede7ed57d050e3274d7bd'
});

const languages = [
    'fr',
    'es',
    'de',
    'it'
];

let sample;
let resources;

/*
const bar = new ProgressBar({ 
    schema: ':bar',
    total : 100
});
*/

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

    return async(node) => {
        if (!node) {
            return
        }
        if (Array.isArray(node)) {
            await Promise.all(node.map(async (value, key) => {
                await parseNode(node[key])
            }))
            return
        }
        await Promise.all(Object.keys(node).map(async (key) => {
            if (typeof(node[key]) === 'string') {
                try {
                    total++;
                    const translationResult = await translate.translate(node[key], {
                        langIn: 'en', // English
                        langOut: 'it'
                    });
                    node[key] = translationResult;
                    completed++;
                } catch (e) {
                    console.log('translate API Error', e);
                }
                
            } else {
                await parseNode(node[key])
            }
        }))
    }
})();

const nodeToText = (node, depth = 0, keyName = 'const resources =') => {
    
    let text = '';

    if (!node) {
        text += `${'    '.repeat(depth)}${keyName} null,
`;
        return text
    }

    const keys = Object.keys(node);

    if(typeof(node) === 'string' || !node) {
        text += `${'    '.repeat(depth)}${keyName} \`${node.replace('`', '\\`')}\`,
`;

    } else if (Array.isArray(node)) {
        text = `${'    '.repeat(depth)}${keyName} [
`;
        node.forEach((value, key) => {
            text += nodeToText(node[key], depth+1, ``)
        })
            text += `${'    '.repeat(depth)}],
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
    // bar.clear()
    // console.log(resources);
    fs.writeFileSync('./output.js', nodeToText(resources));    
})();

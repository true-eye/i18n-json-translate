# yandex-translate-async

Translate languages using the Yandex API.

## Installation

1.  Sign up for a Yandex API key at https://translate.yandex.com/developers/keys

2.  Install this package in your project:

        $ npm install --save yandex-translate-async

3.  Use it:

```
import YandexTranslate from 'yandex-translate-async';

const yc = new YandexTranslate({
	apiKey:
	'<< YOUR YANDEX API KEY HERE >>'
});

const output = await yc.translate('hello world', {
	langIn: 'en', // English
	langOut: 'zh' // Chinese
});

console.log(output); // 世界你好
```

## Bugs and features

Please file in GitHub.

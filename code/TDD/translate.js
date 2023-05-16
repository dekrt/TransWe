// translate.js
const axios = require('axios');
const md5 = require('md5');

async function translate(inputText, sourceLang, targetLang) {
    if (!inputText) {
        throw new Error('Invalid input');
    }

    const appid = '20230428001660105';
    const secretKey = 'cVKXtU5tdGp8YDBPghkX';
    const salt = (new Date()).getTime();
    const text_encode = encodeURIComponent(inputText);
    const str1 = appid + text_encode + salt + secretKey;
    const sign = md5(str1);

    const response = await axios.post('https://fanyi-api.baidu.com/api/trans/vip/translate', {
        q: text_encode,
        from: sourceLang,
        to: targetLang,
        appid: appid,
        salt: salt,
        sign: sign,
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    if (response.data.error_code) {
        throw new Error(`Translation failed: ${response.data.error_msg}`);
    }

    return response.data.trans_result[0].dst;
}

module.exports = translate;
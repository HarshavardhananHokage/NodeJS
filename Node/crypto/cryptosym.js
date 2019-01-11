const crypto = require('crypto');

const algorithm = 'aes-256-ctr';
const password = 'asdasdasd';

function encryptText(text) {
    let method = crypto.createCipher(algorithm, password);
    let data = method.update(text, 'utf8', 'hex');
    data += method.final('hex');
    return data;
}

function decryptText(text) {
    let decipher = crypto.createDecipher(algorithm, password);
    let data = decipher.update(text, 'hex', 'utf8');
    data += decipher.final('utf8');
    return data;
}

let encrpytedPass = encryptText("Password")
console.log(encrpytedPass);
let decryptedPass = decryptText(encrpytedPass);
console.log(decryptedPass);
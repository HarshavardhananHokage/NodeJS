const readline = require('readline');
const crypto = require('crypto');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const method = 'hmac';
let hashFunction;
if(method === 'hash') {
    hashFunction = crypto.createHash('md5');
} else {
    hashFunction = crypto.createHmac('md5', 'sugar');
}

input.question("Value to Hash? ", (value) => {

    data = hashFunction.update(value, 'utf-8');
    //console.log(data);
    hashData = data.digest('hex');
    console.log("Hash Value: " +hashData);
    //console.log(hashData === '5f4dcc3b5aa765d61d8327deb882cf99')
    input.close();
})
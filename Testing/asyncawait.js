let fs = require('fs');
let util = require('util');

const readFile = util.promisify(fs.readFile);

var func = async function() {
    return await readFile('./Testing/hello.txt', 'utf8');
}

func().then((result) => console.log(result));
console.log("reading");

for(let i = 0; i <  1000; i++) {
    console.log(i);
    
}
function sum(arr) {
    return arr.reduce((a, b) => a + b);
}

function sumOfTwo(a, b) {
    return a + b;
}

module.exports.sum = sum;
module.exports.sumOfTwo = sumOfTwo;
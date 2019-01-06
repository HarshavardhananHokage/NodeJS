function* generatorFunc() {
    yield 1;
    yield 2;
    return 3;
}

var gen = generatorFunc();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
//console.log(gen.next());
import * as Module from './math.js';

console.log('Сума чисел 5 та 5:', Module.sum(5, 5));

console.log('Значення константи PI:', Module.PI);

const complexNumber = new Module.Complex(8, 2);
console.log('Екземпляр класу Complex:', complexNumber);
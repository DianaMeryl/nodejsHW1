const { sum, PI, Complex } = require('./math');

console.log('Сума чисел 5 та 7:', sum(5, 7));

console.log('Значення константи PI:', PI);

const complexNumber = new Complex(8, 9);
console.log('Екземпляр класу Complex:', complexNumber);
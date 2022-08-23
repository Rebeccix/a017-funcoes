// A ----------------------------------
const sum = (num1, num2) => num1 + num2

console.log(sum(2, 6))

// B ----------------------------------
const check = (num1, num2) => num1 >= num2

console.log(check(10, 9))

// c ----------------------------------
const checkPositive = num1 => num1 % 2 === 0 ? `${num1} é par` : `${num1} é impar`

console.log(checkPositive(5))

// D ----------------------------------
const checkString = str => `${str.toUpperCase()} \nTamanho: ${str.length}`

console.log(checkString("oi meu nome é rebecca"))
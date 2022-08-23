const soma = (num, num2) => num + num2

const subtracao = (num, num2) => num - num2

const multiplicacao = (num, num2) => num * num2

const divisao = (num, num2) => num / num2

const number = +prompt("Digite um número");
const number2 = +prompt("Digite outro número");

console.log(soma(number, number2))
console.log(subtracao(number, number2))
console.log(multiplicacao(number, number2))
console.log(divisao(number, number2))


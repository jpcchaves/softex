/*
    === OPERAÇÕES ===
    0 => soma
    1 => subtração
    2 => multiplicação
    3 => divisão (evitando divisão por 0)

*/
function calculadora(num1, num2, operacao) {
  switch (operacao) {
    case 0:
      return num1 + num2;
    case 1:
      return num1 - num2;
    case 2:
      return num1 * num2;
    case 3:
      return num2 != 0 ? num1 / num2 : "O valor não pode ser dividido por 0";
    default:
      return "Insira um valor válido!";
  }
}

// teste soma
const soma = calculadora(1, 2, 0);
console.log(soma);
// teste subtração
const subtracao = calculadora(10, 20, 1);
console.log(subtracao);
// multiplicação
const multi = calculadora(20, 20, 2);
console.log(multi);
// divisão por 0
const dividePorZero = calculadora(20, 0, 3);
console.log(dividePorZero);
// divisão normal
const divisaoNormal = calculadora(20, 10, 3);
console.log(divisaoNormal);

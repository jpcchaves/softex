const btn = document.querySelector("#calcular");
const res = document.querySelector(".res");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const operationInput = document.querySelector("#operacao");
  const num1Input = document.querySelector("#num1");
  const num2Input = document.querySelector("#num2");

  const getInputValue = (input) => {
    return Number(input.value);
  };

  // getting input values
  const operation = getInputValue(operationInput);
  const num1 = getInputValue(num1Input);
  const num2 = getInputValue(num2Input);

  const getSoma = (n1, n2) => {
    return (res.innerHTML = n1 + n2);
  };

  const getSubtracao = (n1, n2) => {
    return (res.innerHTML = n1 - n2);
  };

  const getMult = (n1, n2) => {
    return (res.innerHTML = n1 * n2);
  };

  const getDivisao = (n1, n2) => {
    return (res.innerHTML =
      n2 != 0 ? n1 / n2 : "O valor não pode ser dividido por 0");
  };

  function calculadora(num1, num2, operacao) {
    if (operacao >= 0 && operacao <= 3) {
      switch (operacao) {
        case 0:
          return getSoma(num1, num2);
        case 1:
          return getSubtracao(num1, num2);
        case 2:
          return getMult(num1, num2);
        case 3:
          return getDivisao(num1, num2);
        default:
          return "Insira um valor válido!";
      }
    } else {
      res.innerHTML = `Por favor, insira uma operação válida!`;
    }
  }
  calculadora(num1, num2, operation);
});

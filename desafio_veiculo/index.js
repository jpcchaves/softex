const qtdeRodas = 4;
const pesoBrutoKG = 3501;
const qtdePessoas = 9;

if (qtdeRodas <= 1) {
  console.log("Insira uma quantidade de rodas válida!");
} else if (qtdeRodas >= 2 && qtdeRodas <= 3) {
  console.log(
    `A melhor categoria de habilitação para o veículo informado a partir das condições: A`
  );
} else if (
  qtdeRodas >= 4 &&
  qtdePessoas >= 0 &&
  qtdePessoas <= 8 &&
  pesoBrutoKG <= 3500
) {
  console.log(
    `A melhor categoria de habilitação para o veículo informado a partir das condições: B`
  );
} else if (
  qtdeRodas >= 4 &&
  qtdePessoas >= 0 &&
  qtdePessoas <= 8 &&
  pesoBrutoKG >= 3500 &&
  pesoBrutoKG <= 6000
) {
  console.log(
    `A melhor categoria de habilitação para o veículo informado a partir das condições: C`
  );
} else if (
  qtdeRodas >= 4 &&
  qtdePessoas > 8 &&
  pesoBrutoKG >= 3500 &&
  pesoBrutoKG <= 6000
) {
  console.log(
    `A melhor categoria de habilitação para o veículo informado a partir das condições: D`
  );
} else {
  console.log(
    `A melhor categoria de habilitação para o veículo informado a partir das condições: E`
  );
}

// Na função abaixo, vemos que temos várias funções que interagem entre si.
// Primeiro, temos a função geraArray, que vai nos dar um array com 30 elementos, todos ímpares.
// Segundo, temos a função suffleArray, que vai receber nosso array como parâmetro e vai embaralhar os números
// Terceiro, temos a função ordenateArray, que vai ordenar nosso array novamente, que é passado como retorno da função desafioSoftex()

function desafioSoftex() {
  // gera um array com 60 números
  const geraArray = () => {
    let arrayInicial = [];
    for (let i = 1; i < 60; i++) {
      if (i % 2 == 1) {
        arrayInicial.push(i);
      }
    }
    return arrayInicial;
  };
  const arrayGerado = geraArray();

  function shuffleArray(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  // randomArray
  const randomArray = shuffleArray(arrayGerado);

  // ordenate array
  const ordenateArray = (randomArray) => {
    return randomArray.sort((a, b) => a - b);
  };

  let finalArray = ordenateArray(randomArray);
  return finalArray;
}
console.log(desafioSoftex());

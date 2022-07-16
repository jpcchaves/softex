// gera um array com 30 números
const geraArray = () => {
  const arrayInicial = [];
  for (let i = 1; i < 60; i++) {
    let newNumber = i;
    arrayInicial.push(newNumber);
  }
  return arrayInicial;
};
// Randomize the array
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
// randomArray
let randomArray = shuffleArray(geraArray());

// Only odds
const onlyOdds = (num) => num % 2 != 0;

// filterArray
const filterArray = (randomArr) => {
  let newArray = randomArr.filter((number) => onlyOdds(number));
  return newArray;
};

console.log(filterArray(randomArray));

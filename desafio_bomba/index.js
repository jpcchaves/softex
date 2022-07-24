// timer inicial
let segs = 10;

let timerToExplode = setInterval(() => {
  // Contagem regressiva
  console.log(`A bomba irá explodir em ${segs} segundos`);

  // Condição a ser testada
  if (segs === 0) {
    clearInterval(timerToExplode);
    console.log("A bomba explodiu!");
  }
  
  //  decremento
  segs--;
}, 1000);

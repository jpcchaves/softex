const candidatoX = 889;
const candidatoY = 847;
const candidatoZ = 515;
const votoBranco = 0;

let valorInserido = 12;

if (valorInserido === candidatoX) {
  return console.log(`Voto no candidatoX computado com sucesso!`);
} else if (valorInserido === candidatoY) {
  return console.log(`Voto no candidatoY computado com sucesso!`);
} else if (valorInserido === candidatoZ) {
  return console.log(`Voto no candidatoY computado com sucesso!`);
} else if (valorInserido === 0) {
  return console.log(`Voto em branco computado com sucesso!`);
} else {
  return console.log(`Valor inválido!`);
}

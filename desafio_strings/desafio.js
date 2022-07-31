const nome = "João Paulo";
const nome2 = "João Paulo";
const nome3 = "João Paulo";
const nome4 = "João Paulo";

// ===== Metódos String =====

// Length
let comprimentoString = nome.length;
console.log(
  `A string possui ${comprimentoString} caracteres (incluindo espaços em branco)`
);

// toUpperCase (letras maiúsculas)
let nomeUpper = nome2.toUpperCase();
console.log(nomeUpper);

// toLowerCase
let nomeLower = nome3.toLowerCase();
console.log(nomeLower);

// replace
let nomeReplace = nome4.replace("João", "Zezinho");
console.log(nomeReplace);

// Substring
let nomeSubString = nome.substring(5, 10);
console.log(nomeSubString);

// Split
let nomeSplit = nome.split(" ");
console.log(nomeSplit);
nomeSplit.map((elementoAtual) => {
  console.log(elementoAtual);
});



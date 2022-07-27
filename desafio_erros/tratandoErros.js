const nome = "João";
const anoNasc = 1997;
const anoAtual = 2022;

const idade = anoAtual - anoNasc;

try {
  if (anoNasc >= 1922 && anoNasc <= 2022) {
    console.log(`${nome} ${idade}`);
  } else {
    throw new Error("Valores inválidos");
  }
} catch (error) {
  console.log(error.message);
}

const nome = "";

try {
  if (nome) {
    return console.log(`Seu nome é ${nome}`);
  } else {
    throw new Error("Insira seu nome para continuar!");
  }
} catch (error) {
  console.log(error.message);
}

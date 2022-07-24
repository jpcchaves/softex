// variáveis globais
const aluno = "João";
const nota1 = 7;
const nota2 = 7;
const faltasAluno = 2;

// média aluno
const calculaMedia = (n1, n2) => {
  return (n1 + n2) / 2;
};
const mediaAluno = calculaMedia(nota1, nota2);

// variáveis de controle
const notaDeCorte = 7;
const maxFaltas = 3;

if (mediaAluno < notaDeCorte || faltasAluno >= maxFaltas) {
  console.log(`O aluno ${aluno} está reprovado`);
} else {
  console.log(
    `O aluno ${aluno} está aprovado com media ${mediaAluno} e total de faltas ${faltasAluno}`
  );
}

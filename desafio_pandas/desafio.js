let aluno = "João Paulo";
let nota1 = 7;
let nota2 = 8;
let faltas = 3;

const qtdeAvaliacoes = 2;

const aprovado = "aprovado!";
const reprovado = "reprovado!";

const calculaMedia = (n1, n2, qtdeAvaliacoes) => {
  return (n1 + n2) / qtdeAvaliacoes;
};

const media = calculaMedia(nota1, nota2, qtdeAvaliacoes);

const situacaoAluno = (aluno, media, faltas, aprovado, reprovado) => {
  if (faltas > 5 || media < 7) {
    return `O aluno ${aluno} foi ${reprovado}`;
  } else {
    return `O aluno ${aluno} foi ${aprovado}`;
  }
};

const analiseAluno = situacaoAluno(aluno, media, faltas, aprovado, reprovado);

console.log(analiseAluno);

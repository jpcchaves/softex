class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeDaPessoa() {
    return this.nome;
  }

  get sobrenomeDaPessoa() {
    return this.sobrenome;
  }

  set mudarNomePessoa(nomePessoa) {
    return (this.nome = nomePessoa);
  }

  set mudarSobrenomePessoa(sobrenomePessoa) {
    return (this.sobrenome = sobrenomePessoa);
  }
}

let pessoaExemplo = new Pessoa("João", "Paulo");
console.log(pessoaExemplo.nome);
console.log(pessoaExemplo.sobrenome);

pessoaExemplo.mudarNomePessoa = "Zezinho";
pessoaExemplo.mudarSobrenomePessoa = "Shaolin";
console.log(pessoaExemplo.nome);
console.log(pessoaExemplo.sobrenome);

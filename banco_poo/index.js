class Banco {
  constructor(conta, saldo, tipoConta, agencia) {
    this.conta = conta;
    this.saldo = saldo;
    this.tipoConta = tipoConta;
    this.agencia = agencia;
  }

  fazerDeposito(valorDepositado) {
    this.saldo += valorDepositado;
  }

  fazerSaque(valorSacado) {
    this.saldo -= valorSacado;
  }
}

const contaExemplo = new Banco(123, 3000, "Poupança", 02);

console.log(contaExemplo.saldo);

contaExemplo.fazerDeposito(1000);
console.log(contaExemplo.saldo);
contaExemplo.fazerSaque(1000);
console.log(contaExemplo.saldo);
console.log(contaExemplo.conta);

class Produto {
  constructor() {
    this.contador = "Produto Adicionado";
  }
  // métodos
  // Add um produto
  incrementar() {
    console.log(`${this.contador}`);
  }
}

let produto1 = new Produto();

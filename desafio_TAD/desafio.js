// Class Calcular
class Calcular {
  // constructor with params
  constructor(num1, num2, num3) {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
  }
  //   get soma
  get sum() {
    return this.calcSum();
  }
  //   operation
  calcSum() {
    return this.num1 + this.num2 + this.num3;
  }
  //subtraction
  get subtrac() {
    return this.calcSubtraction();
  }
  //   operation
  calcSubtraction() {
    return this.num1 - this.num2 - this.num3;
  }

  //   get multiplication
  get multi() {
    return this.calcMult();
  }

  calcMult() {
    return this.num1 * this.num2 * this.num3;
  }
  //   Divided by
  get divided() {
    return this.calcDivided();
  }

  calcDivided() {
    return this.num1 / this.num2 / this.num3;
  }
}
// Instance
const sum = new Calcular(10, 10, 10);
// Instance
const mult = new Calcular(10, 10, 10);
// Instance
const subtrac = new Calcular(50, 10, 10);
// Instance
const divided = new Calcular(50, 50, 2);

// Accessing the final results
const finalSum = sum.sum;
const finalMult = mult.multi;
const finalSub = subtrac.subtrac;
const finalDivided = divided.divided;

// Console.log
console.log(` Soma: ${finalSum} \n Multiplicação: ${finalMult}\n Substração: ${finalSub} \n Divisão: ${finalDivided}
  `);

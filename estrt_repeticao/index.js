const obj1 = {
  nome: "João",
  sobrenome: "Paulo",
  idade: 24,
};

const arr1 = [0, 1, 2];

for (const iterator of arr1) {
  console.log(iterator);
}

for (const key in obj1) {
  console.log(obj1[key]);
}

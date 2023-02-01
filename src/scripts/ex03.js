// 07 Crie um objeto que receba ao menos três propriedades sobre você.
// 08 Adicione uma nova propriedade sem alterar seu objeto inicial.
// 09 Remova uma propriedade desse objeto.
// 10-Mostre no console todas as propriedades desse objeto.

const pessoa = {
  nome: "Alex",
  idade: 29,
  cidade: "QMD"
}
console.log(pessoa);

pessoa.altura = 169
console.log(pessoa);

delete pessoa.cidade
console.log(pessoa);

for (const prop in pessoa) 
  console.log(`${prop}: ${pessoa[prop]}`)

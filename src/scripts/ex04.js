// 11-Crie um cadastro  chamado "cadastro" contendo ao menos 5 objetos. 
//   Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//   Na propriedade amigos, adicione ao menos 4 itens.
// 12- Mostre no console o nome de um amigo de cada lista.

const cadastro = [
  {
    nome: "Alix",
    idade: 21,
    telefone: "+55 21 3554-1420",
    amigos: []
  },
  {
    nome: "Ena",
    idade: 9,
    telefone: "+55 21 3154-6420",
    amigos: []
  },
  {
    nome: "Vic",
    idade: 11,
    telefone: "+55 21 93554-1420",
    amigos: []
  },
  {
    nome: "Sol",
    idade: 52,
    telefone: "+55 65 98554-9420",
    amigos: []
  },
];


// console.log( cadastro.entries() );
// console.log( [...cadastro.entries()] );̆

// of...of usando entries(), que retorna um array
// com arrays contendo o seguinte par [index, elemento]
for (const [i, pessoa] of cadastro.entries()) {
  pessoa.amigos = [
    `amg${(i * 4) + 1}`,
    `amg${(i * 4) + 2}`,
    `amg${(i * 4) + 3}`,
    `amg${(i * 4) + 4}`
  ]
}


// for...of com destructuring do objeto retornado
for (const { nome, amigos } of cadastro)
  console.log(`Amigo de ${nome}: ${amigos[0]}`);


console.log("");    //  spacer


// forEach capturando o index
cadastro.forEach(({ nome, amigos }, i) =>
  console.log(`Amigo de ${nome}: ${amigos[i]}`)
)
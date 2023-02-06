// 11-Crie um cadastro  chamado "cadastro" contendo ao menos 5 objetos. 
//   Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//   Na propriedade amigos, adicione ao menos 4 itens.
// 12- Mostre no console o nome de um amigo de cada lista.

const cadastro = [
  { nome: "Alix", idade: 21, telefone: "+55 21 3554-1420",
    /** @type {string[]} */ amigos: [] },
  { nome: "Ena", idade: 9,  telefone: "+55 21 3154-6420",  amigos: [] },
  { nome: "Vic", idade: 11, telefone: "+55 21 93554-1420", amigos: [] },
  { nome: "Sol", idade: 52, telefone: "+55 65 98554-9420", amigos: [] },
];


// console.log( cadastro.entries() );
// console.log( [...cadastro.entries()] );̆


// Diferentes maneiras de popular o array amigos[]   ---------------------

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


// reset amigos[] 
cadastro.forEach(({ amigos }) =>  amigos.length = 0 )

// método from()
for (const[i, pessoa] of cadastro.entries()) {
  pessoa.amigos = Array.from(
    { length: 4 },
    (_, j) => `amg${(i * 4) + j + 1}`
  )
}


// reset amigos[] 
cadastro.forEach(({ amigos }) =>  amigos.length = 0 )

// [...Array(4).keys()] 
// array dos índices "keys()" de outro array "Array(4)"
cadastro.forEach(({ amigos }, i) => {
  amigos.push(...[...Array(4).keys()]
    .map(j => ++j)
    .map(j => `amg${(i * 4) + j}`)
  )
})


// Diferentes maneiras de mapear cadastro[]  -------------------
// para exibir amigos no console -------------------------------

// for...of com destructuring do objeto retornado
for (const { nome, amigos } of cadastro)
  console.log(`Amigo de ${nome}: ${amigos[0]}`);
;


console.log("");    //  spacer

// forEach capturando o index
cadastro.forEach(({ nome, amigos }, i) =>
  console.log(`Amigo de ${nome}: ${amigos[i]}`)
);


console.log("");    //  spacer

cadastro
  .map( ({ nome, amigos }) => `Amigo de ${nome}: ${amigos[0]}` )
  .forEach(frase => console.log(frase))
;


console.log("");    //  spacer

console.log(
  cadastro
    .map( ({ nome, amigos }) => `Amigo de ${nome}: ${amigos[0]}` )
    .join("\n")
);


console.log("");    //  spacer

console.log(
  cadastro
    .map( ({ nome, amigos }) => `Amigo de ${nome}: ${amigos[0]}` )
    .reduce((blocoTxt, linha) => blocoTxt.concat(linha, "\n"), "")
);



console.log("");
// console.log(cadastro);
// console.log(cadastro.values().next().value);
globalThis.cadastro = cadastro

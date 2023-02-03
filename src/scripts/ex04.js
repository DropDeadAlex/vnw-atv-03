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

for (const pessoa of cadastro)
  pessoa.amigos = ["amg01", "amg02", "amg03", "amg04"]

// console.log( cadastro.entries() );
// console.log( [...cadastro.entries()] );
for (const [i, { nome, amigos }] of cadastro.entries())
  console.log(`Amigo de ${nome}: ${amigos[i]}`);


console.log("");

  
cadastro.forEach(({ nome, amigos }, i) => 
  console.log(`Amigo de ${nome}: ${amigos[i]}`)
)
// 11-Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
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
    telefone: "+55 21 3554-1420",
    amigos: []
  },
  {
    nome: "Sol",
    idade: 52,
    telefone: "+55 21 3554-1420",
    amigos: []
  },
];

for (const pessoa of cadastro)
pessoa.amigos = ["amg01", "amg02", "amg03", "amg04"]

for (const pessoa of cadastro){
  console.log(`Amigo de ${pessoa.nome}: ${pessoa.amigos[0]}`);
}

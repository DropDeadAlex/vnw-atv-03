// 01- Crie um array que receba 5 itens e exiba no console.
// 02- Utilize um método para adicionar um nome ao inicio do array.
// 03- Utilize um método para remover o último nome do array.
// 04- Utilize um método para adicionar dois nomes ao fim do array.
// 05- Utilize um método para remover o primeiro nome do array.

let array = ["İ", "€", "æ", "œ", "ø"]
console.log(array);

array.unshift("Abe")        //begin.add()
console.log(array);

array.pop()                 //last.del()
console.log(array);

array.push("Alli", "Elle")  //end.add()
console.log(array);

array.shift()               //first.del()
console.log(array);

const valores = [7.7 , 8.9 , 6.3, 9.2]
console.log(valores[0],valores[3])
console.log(valores[4])//indefinido

valores[4] = 10
console.log(valores)
console.log(valores.length)//quantidade de elementos no array
//           objeto,falso,nulo,string
valores.push({id: 3},false,null,"teste")// push adiciona no final da lista
console.log(valores)

console.log(valores.pop())//vai tira do array o ultimo elemento e retorna ele.

// deleta o índice 0 do array
delete valores[0]
console.log(valores)

console.log(typeof valores)

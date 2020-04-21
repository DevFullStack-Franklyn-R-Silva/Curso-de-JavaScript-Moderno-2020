const escola = "Cod3r"

console.log(escola.charAt(4))//letra "r"
console.log(escola.charAt(5))// aqui não aparece nada, retorna vazio
console.log(escola.charCodeAt(3))//código relacionado a tabela unicode
console.log(escola.indexOf("d"))//Qual Posição da letra ou número
console.log(escola.substring(1,3))// vai do índice 1 ao 3 neste exemplo imprimir " od "
console.log("Escola ".concat(escola).concat("!"), "Udemy," + " PROGRAMAÇÃO.")// concatenação, junta duas palavras, letras etc.
console.log(escola.replace(3,"e"))// substituir uma letra ou palavra por outra
console.log(escola.replace(/\d/,"e"))
console.log(escola.replace(/\w/,"e"))//substituir uma letra {isso é curso de regex}
console.log(escola.replace(/\w/g,"e"))//substituir todas letras da sua escolha
console.log("Ana,Maria,Pedro".split(","))//Array

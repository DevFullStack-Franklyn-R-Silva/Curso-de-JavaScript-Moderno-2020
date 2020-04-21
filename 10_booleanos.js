let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)//verdadeiro
console.log(!isAtivo)//false

console.log("Os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = 33))

console.log("Os falsos...")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("Para finalizar...")
console.log(!!("" || null || 0 || " "))//verdadeiro

let nome = "lux"//substituir ""(vazio) pelo nome qualquer vai imprimir o nome qualquer
console.log(nome || "Desconhecido")



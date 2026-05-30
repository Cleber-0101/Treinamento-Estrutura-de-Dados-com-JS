var avgTemp = []

avgTemp[1] = 53551.00
avgTemp[2] = 8351.00
avgTemp[3] = 534521.00
avgTemp[4] = 423421.00
avgTemp[5] = 4231.00
avgTemp[6] = 42300000000000000.00

//iniciando o array ja com dados definidos (mostra tamanho do array)
var diasDaSemana = ['segunda', 'terça' , 'quarta' , 'quinta' , 'sexta', 'sabado' , 'domingo']

//inserindo no final do array
console.log(diasDaSemana.push("testando pop"))

//pop remove items do array


// removendo dados a parti de uma posição: preciso passar a partir de qual posição irei remover e quantos item irei remover
diasDaSemana.splice(3,4)

for(let i = 0; i < diasDaSemana.length ; i++){
    console.log(diasDaSemana[i])
}

let fibonacci = []
fibonacci[0] = 0
fibonacci[1] = 1
fibonacci[2] = 1

for(let i = 3; i < 20 ; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2] 
}

for(var i = 0; i < fibonacci.length; i++){
    console.log(fibonacci[i])
}

function queue(){
    let items =  []

    this.adiciona = function(algumacoisa){
        // adiciona um novo item 
        items.push(algumacoisa)
    }

    this.remove = function(){
        // remove um item da frente da fila 
        return items.shift()
    }

    this.elementoDaFila = function(){
        //retorna o primeiro item da fila 
        return items[0]
    }

    this.verificaVazio = function(){
        //verifica se a fila esta vazia
        // se for igaul a 0 ela esta vazia se não for é porque tem alguma coisa na fila 
        return items.length = 0
    }

    this.size = function(){
        //Retorna o tamanho da fila 
        return items.length
    }

    this.printar = function(){
        //imprime a fila no console 
        console.log(items.toString())
    }
}
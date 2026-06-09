// esqueleto 
// Ultilizando Classes 
function Stack() {

    let items = []

    // metodos pré implementados 
    this.push = function (elemento) {
        // adiciona item na pilha 
        items.push(elemento)
    }

    this.pop = function () {
        // remove do topo da pilha 
        return items.pop
    }

    this.peek = function () {
        // devolve o elemento que esta no topo da pilha 
        return items[items.length - 1]
    }

    this.isEmpty = function () {
        //informar se a pilha esta vazia ou não 
        // se a pilha for igua a ZERO quer dizer que a pilha esta vazia, do contrario ela esta preechida ou seja tem um dado 
        //return items.length === 0


        //teste
        if(items === 0 || item >= 1){
            return items
        }
    }

    this.clear = function () {
        // Limpa a pilha 
        items = []
    }

    this.size = function () {
        // informa o tamanho da pilha
        return items.length
    }

    this.print = function () {
        // imprime a pilha no console
        console.log(items.toString())
    }

}

var pilha = new Stack()

// //preenchendo a pilha com dados
// pilha.push(100)
// pilha.push(90)
// pilha.push(80)




pilha.print()


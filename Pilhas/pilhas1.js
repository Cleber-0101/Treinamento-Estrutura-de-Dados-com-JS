// esqueleto 
// Ultilizando Classes 
function Stack() {
    let items = []
    // metodos pré implementados 
    this.push = function () {
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
        return items.length === 0
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
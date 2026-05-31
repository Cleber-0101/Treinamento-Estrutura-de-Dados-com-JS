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

var pilha = new Stack()

pilha.push(100)
pilha.push(90)
pilha.push(80)
pilha.push(70)
pilha.push(60)
pilha.push(50)
pilha.push(40)
pilha.push(30)
pilha.push(20)
pilha.push(10)
pilha.push(9)
pilha.push(8)
pilha.push(7)
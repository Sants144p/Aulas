class Produto {
    private nome : string;
    private preco: number;

    constructor(nome:string, preco:number){
        this.nome = nome;
        this.preco = preco;
    }

    getPreco() : number {
        return this.preco
    }
}

class CarrinhoDeCompras{
    produtos : Produto[]

    constructor(produtos : Produto[]){
        this.produtos = produtos
    }

    AdicionarProduto(Produto : Produto) : void {
        this.produtos.push(Produto)
    }
    CalcularTotal() : void {
        let total = 0
        for (let i = 0; i < this.produtos.length; i++){
            total += this.produtos[i].getPreco()
        }
        console.log(`TOTAL: R$ ${total.toFixed(2)}`)
    }
}

let produto1 = new Produto("Rapador de coco",29.99)
let produto2 = new Produto("Furador de coco",19.99)
let produto3 = new Produto("Canudo pra beber coco",2.63)

let lista = [produto1,produto2,produto3]
let carrinho1 = new CarrinhoDeCompras(lista)

carrinho1.CalcularTotal()
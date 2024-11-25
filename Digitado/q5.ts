export class Produto{

    public nome : string
    public preco : number

    constructor(nome : string, preco : number){
        
        this.nome = nome
        this.preco = preco

    }

    info() : string {

        return `Nome: ${this.nome} - Preço: R$ ${this.preco.toFixed(2)}`
    }

}

export class CarrinhoDeCompras {

    protected carro: Produto[] = []

    AdicionarProduto(produto : Produto) : void{
    
        this.carro.push(produto)
        console.log("Produto Adicionado")
    
        }

    CalcularTotal() : number{

        let total = 0

        for (let produto of this.carro){

            total += produto.preco
        }
        
        return total
        
    }    

    listarProdutos() : void{

        console.log("CARRINHO DE COMPRAS")

        this.carro.forEach(produto => {

            console.log("- " + produto.info())

        })
        
        console.log("--------------------------------------------------------------------------")
        console.log(`O total de seu compra foi de R$${this.CalcularTotal().toFixed(2)}`)

    }



}

let prod1 = new Produto("8Gb de Memória Ram DDR4 3200MHz", 120.00)
let prod2 = new Produto("Processador Ryzen 5 5500 AMD", 550.00)

let Carrinho = new CarrinhoDeCompras

Carrinho.AdicionarProduto(prod1)
Carrinho.AdicionarProduto(prod2)
Carrinho.AdicionarProduto(new Produto("Gabinete Pichau com 3 Fan", 125.00))

Carrinho.listarProdutos()
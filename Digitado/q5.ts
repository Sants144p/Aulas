export class Produto{

    protected nome : string
    protected preco : number

    constructor(nome : string, preco : number){
        
        this.nome = nome
        this.preco = preco

    }

    info() : string {

        return `Nome: ${this.nome} - Preço: R$ ${this.preco.toFixed(2)}`
    }

}

export class CarrinhoDeCompras{

    protected carro: Produto[] = []

    AdicionarProduto(produto : Produto) : void{
    
        this.carro.push(produto)
        console.log("Produto Adicionado")
    
        }

    CalcularTotal(){

        
    }    






}
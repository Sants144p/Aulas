/* Crie uma classe Livro com os atributos título. autor e preço. 
Crie um metodo que retorne uma string com o título, autor e preço do livro */

class Livro {

    titulo: string
    autor: string
    preco: number

    constructor(titulo: string, autor: string, preco: number){

        this.titulo = titulo
        this.autor = autor
        this.preco = preco

    }

    setPreco(novo_preco : number) : void{

        if (novo_preco >= 0){
        this.preco = novo_preco            
        }else{
            console.log("Valor Inválido")

        }

    }

    retorno(): string{

        return ` Livro: ${this.titulo} \n Autor(a): ${this.autor} \n Preço R$${this.preco.toFixed(2)}`
    }

}

let livro1 = new Livro("Assim falou Zaratustra", "Friedrich Nietzsche", 29.99)

let livro2 = new Livro("Crepúsculo dos Ídolos", "Friedrich Nietzsche", 19.99)

let livro3 = new Livro("Além do bem e do Mal", "Friedrich Nietzsche", -15.99)



let livros : Livro[] = [livro1, livro2]
livros.forEach(livro =>{

    console.log(livro.retorno())
    console.log("----------------------------------------------")

})


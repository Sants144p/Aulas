/* Crie uma classe Livro com os atributos título. autor e preço. 
Crie um metodo que retorne uma string com o título, autor e preço do livro */

class Livro {

    private _titulo : string;
    private _autor : string;
    private _preco : number;

    constructor(titulo : string, autor : string, preco : number) {
        this._titulo = titulo;
        this._autor = autor;
        this._preco = preco;
    }

    get preco() {
        return this._preco;
    }

    set preco(novo_preco : number) {
        if (novo_preco >= 0)
            this._preco = novo_preco;
        else 
            console.log("Não permitido valor negativo!");
    }
    retorno() : string {
        return `Livro: ${this._titulo}\nAutor: ${this._autor}\nPreço: R$ ${this._preco.toFixed(2)}`;    }
}


let livro1 = new Livro("Assim falou Zaratustra", "Friedrich Nietzsche", 29.99)

let livro2 = new Livro("Crepúsculo dos Ídolos", "Friedrich Nietzsche", 19.99)

let livro3 = new Livro("Além do bem e do Mal", "Friedrich Nietzsche", -15.99)



let livros : Livro[] = [livro1, livro2, livro3]
livros.forEach(livro =>{

    console.log(livro.retorno())
    console.log("----------------------------------------------")

})

livro3.preco = 15.99;
console.log(livro3.retorno());
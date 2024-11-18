/* Crie uma classe Livro com os atributos título. autor e preço. Crie um metodo que retorne uma string com o título, autor e preço do livro 

Adicione métodos getters e setters para as propriedades, de modo que o usuário possa ler e modificar os valores (altere os atributos para privados). 
Crie uma instância da classe e teste os métodos, verificando se os valores podem ser acessados e atualizados corretamente.

Crie uma classe Biblioteca que possui uma propriedade livros, que é um array de objetos da classe Livro. 
Implemente um método adicionarLivro(livro: Livro) para adicionar novos livros ao array. 
Implemente outro método listarLivros() que exibe o título e o autor de todos os livros adicionados à biblioteca. 
Crie uma instância de Biblioteca, adicione alguns livros e teste a listagem.

*/

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


class Biblioteca {

    private livros : Livro[] = []

    /* 
    contructor(livros : Livro[]){

        this.livros = livros

    }
    */

    AdicionarLivro(livro: Livro) : void{
    
    this.livros.push(livro)
    console.log("Livro Adicionado")

    }

    listarLivros() : void{

        console.log("LISTAGEM DOS LIVROS")

        this.livros.forEach(livro => {

            console.log("- " + livro.retorno())

        })

        console.log("--------------------------------------------------------------------------")

    }
}

let livro1 = new Livro("Assim falou Zaratustra", "Friedrich Nietzsche", 29.99)

let livro2 = new Livro("Crepúsculo dos Ídolos", "Friedrich Nietzsche", 19.99)

let livro3 = new Livro("Além do bem e do Mal", "Friedrich Nietzsche", -15.99)

let Biblio = new Biblioteca();

Biblio.AdicionarLivro(livro1)
Biblio.AdicionarLivro(livro2)
Biblio.AdicionarLivro(livro3)
Biblio.listarLivros()

Biblio.AdicionarLivro( new Livro("O Anticristo", "Friedrich Nietzsche", 24.99))
livro3.preco = 15.99;
//Biblio.listarLivros()



/*
let vetor: Livro[] = [livro1, livro2, livro3, livro4]
let biblio = new Biblioteca()
vetor.forEach(livro => { biblio.adicionarLivro(livro)})
biblio.listarLivros()
*/

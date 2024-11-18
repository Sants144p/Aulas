/* Crie uma classe Livro com os atributos título. autor e preço. Crie um metodo que retorne uma string com o título, autor e preço do livro

Adicione métodos getters e setters para as propriedades, de modo que o usuário possa ler e modificar os valores (altere os atributos para privados).
Crie uma instância da classe e teste os métodos, verificando se os valores podem ser acessados e atualizados corretamente.

Crie uma classe Biblioteca que possui uma propriedade livros, que é um array de objetos da classe Livro.
Implemente um método adicionarLivro(livro: Livro) para adicionar novos livros ao array.
Implemente outro método listarLivros() que exibe o título e o autor de todos os livros adicionados à biblioteca.
Crie uma instância de Biblioteca, adicione alguns livros e teste a listagem.

*/
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, preco) {
        this._titulo = titulo;
        this._autor = autor;
        this._preco = preco;
    }
    Object.defineProperty(Livro.prototype, "preco", {
        get: function () {
            return this._preco;
        },
        set: function (novo_preco) {
            if (novo_preco >= 0)
                this._preco = novo_preco;
            else
                console.log("Não permitido valor negativo!");
        },
        enumerable: false,
        configurable: true
    });
    Livro.prototype.retorno = function () {
        return "Livro: ".concat(this._titulo, "\nAutor: ").concat(this._autor, "\nPre\u00E7o: R$ ").concat(this._preco.toFixed(2));
    };
    return Livro;
}());
var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.livros = [];
    }
    /*
    contructor(livros : Livro[]){

        this.livros = livros

    }
    */
    Biblioteca.prototype.AdicionarLivro = function (livro) {
        this.livros.push(livro);
        console.log("Livro Adicionado");
    };
    Biblioteca.prototype.listarLivros = function () {
        console.log("LISTAGEM DOS LIVROS");
        this.livros.forEach(function (livro) {
            console.log("- " + livro.retorno());
        });
        console.log("--------------------------------------------------------------------------");
    };
    return Biblioteca;
}());
var livro1 = new Livro("Assim falou Zaratustra", "Friedrich Nietzsche", 29.99);
var livro2 = new Livro("Crepúsculo dos Ídolos", "Friedrich Nietzsche", 19.99);
var livro3 = new Livro("Além do bem e do Mal", "Friedrich Nietzsche", -15.99);
var Biblio = new Biblioteca();
Biblio.AdicionarLivro(livro1);
Biblio.AdicionarLivro(livro2);
Biblio.AdicionarLivro(livro3);
Biblio.listarLivros();
Biblio.AdicionarLivro(new Livro("O Anticristo", "Friedrich Nietzsche", 24.99));
livro3.preco = 15.99;
//Biblio.listarLivros()
/*
let vetor: Livro[] = [livro1, livro2, livro3, livro4]
let biblio = new Biblioteca()
vetor.forEach(livro => { biblio.adicionarLivro(livro)})
biblio.listarLivros()
*/

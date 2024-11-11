/* Crie uma classe Livro com os atributos título. autor e preço.
Crie um metodo que retorne uma string com o título, autor e preço do livro */
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, preco) {
        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
    }
    Livro.prototype.setPreco = function (novo_preco) {
        if (novo_preco >= 0) {
            this.preco = novo_preco;
        }
        else {
            console.log("Valor Inválido");
        }
    };
    Livro.prototype.retorno = function () {
        return " Livro: ".concat(this.titulo, " \n Autor(a): ").concat(this.autor, " \n Pre\u00E7o R$").concat(this.preco.toFixed(2));
    };
    return Livro;
}());
var livro1 = new Livro("Assim falou Zaratustra", "Friedrich Nietzsche", 29.99);
var livro2 = new Livro("Crepúsculo dos Ídolos", "Friedrich Nietzsche", 19.99);
var livros = [livro1, livro2];
livros.forEach(function (livro) {
    console.log(livro.retorno());
    console.log("----------------------------------------------");
});

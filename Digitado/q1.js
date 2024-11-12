/* Crie uma classe Livro com os atributos título. autor e preço.
Crie um metodo que retorne uma string com o título, autor e preço do livro */
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
var livro1 = new Livro("Assim falou Zaratustra", "Friedrich Nietzsche", 29.99);
var livro2 = new Livro("Crepúsculo dos Ídolos", "Friedrich Nietzsche", 19.99);
var livro3 = new Livro("Além do bem e do Mal", "Friedrich Nietzsche", -15.99);
var livros = [livro1, livro2, livro3];
livros.forEach(function (livro) {
    console.log(livro.retorno());
    console.log("----------------------------------------------");
});
livro3.preco = 15.99;
console.log(livro3.retorno());

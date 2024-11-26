var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, preco) {
        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
    }
    Livro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Livro.prototype.setTitulo = function (t) {
        this.titulo = t;
    };
    Livro.prototype.getAutor = function () {
        return this.autor;
    };
    Livro.prototype.setAutor = function (a) {
        this.autor = a;
    };
    Livro.prototype.getPreco = function () {
        return this.preco;
    };
    Livro.prototype.setPreco = function (p) {
        if (p >= 0) {
            this.preco = p;
        }
        else {
            console.log("ERRO: Valor negativo");
        }
    };
    Livro.prototype.descricao = function () {
        return "\nLivro: ".concat(this.titulo, "\nautor: ").concat(this.autor, "\npre\u00E7o: R$ ").concat(this.preco.toFixed(2), "\n-----------------------------------");
    };
    return Livro;
}());
var livro1 = new Livro("Como fazer um acelerador de partículas com um pedaço de pau e uma fita isolante", "Trojan", 29.99);
var livro2 = new Livro("A Revolução dos Bixos", "George Orwell", 12.99);
var livro3 = new Livro("Boa noite Punpun", "Inio Asano", 45.99);
var Biblioteca = /** @class */ (function () {
    function Biblioteca(livros) {
        this.livros = livros;
    }
    Biblioteca.prototype.listar = function () {
        this.livros.forEach(function (livro) {
            console.log(livro.descricao());
        });
    };
    Biblioteca.prototype.Adicionar = function (livro) {
        this.livros.push(livro);
    };
    return Biblioteca;
}());
var LivroDigital = /** @class */ (function (_super) {
    __extends(LivroDigital, _super);
    function LivroDigital(titulo, autor, preco, formato) {
        var _this = _super.call(this, titulo, autor, preco) || this;
        _this.formato = formato;
        return _this;
    }
    LivroDigital.prototype.getFormato = function () {
        return this.formato;
    };
    LivroDigital.prototype.setFormato = function (f) {
        this.formato = f;
    };
    LivroDigital.prototype.descricao = function () {
        return "\nLivro: ".concat(this.titulo, "\nautor: ").concat(this.autor, "\npre\u00E7o: R$ ").concat(this.preco.toFixed(2), "\nformato: ").concat(this.formato, "\n-----------------------------------");
    };
    return LivroDigital;
}(Livro));
//let lista_livros = [livro1,livro2,livro3]
//let biblio = new Biblioteca(lista_livros)
//console.log("biblioteca sem o quarto livro")
//biblio.listar()
//console.log("adicionando o livro")
//let livro4 = new Livro("Berserk", "Kentaro Miura", 65.99)
//biblio.Adicionar(livro4)
//console.log("biblioteca com o livro adicionado")
//biblio.listar()
var livrodigital = new LivroDigital("Teste de livro digital", "digital", 99.99, "PDF");
console.log(livrodigital.descricao());

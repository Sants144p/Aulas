"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrinhoDeCompras = exports.Produto = void 0;
var Produto = /** @class */ (function () {
    function Produto(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    Produto.prototype.info = function () {
        return "Nome: ".concat(this.nome, " - Pre\u00E7o: R$ ").concat(this.preco.toFixed(2));
    };
    return Produto;
}());
exports.Produto = Produto;
var CarrinhoDeCompras = /** @class */ (function () {
    function CarrinhoDeCompras() {
        this.carro = [];
    }
    CarrinhoDeCompras.prototype.AdicionarProduto = function (produto) {
        this.carro.push(produto);
        console.log("Produto Adicionado");
    };
    CarrinhoDeCompras.prototype.CalcularTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.carro; _i < _a.length; _i++) {
            var produto = _a[_i];
            total += produto.preco;
        }
        return total;
    };
    CarrinhoDeCompras.prototype.listarProdutos = function () {
        console.log("CARRINHO DE COMPRAS");
        this.carro.forEach(function (produto) {
            console.log("- " + produto.info());
        });
        console.log("--------------------------------------------------------------------------");
        console.log("O total de seu compra foi de R$".concat(this.CalcularTotal().toFixed(2)));
    };
    return CarrinhoDeCompras;
}());
exports.CarrinhoDeCompras = CarrinhoDeCompras;
var prod1 = new Produto("8Gb de Memória Ram DDR4 3200MHz", 120.00);
var prod2 = new Produto("Processador Ryzen 5 5500 AMD", 550.00);
var Carrinho = new CarrinhoDeCompras;
Carrinho.AdicionarProduto(prod1);
Carrinho.AdicionarProduto(prod2);
Carrinho.AdicionarProduto(new Produto("Gabinete Pichau com 3 Fan", 125.00));
Carrinho.listarProdutos();

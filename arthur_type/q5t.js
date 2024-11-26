var Produto = /** @class */ (function () {
    function Produto(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    Produto.prototype.getPreco = function () {
        return this.preco;
    };
    return Produto;
}());
var CarrinhoDeCompras = /** @class */ (function () {
    function CarrinhoDeCompras(produtos) {
        this.produtos = produtos;
    }
    CarrinhoDeCompras.prototype.AdicionarProduto = function (Produto) {
        this.produtos.push(Produto);
    };
    CarrinhoDeCompras.prototype.CalcularTotal = function () {
        var total = 0;
        for (var i = 0; i < this.produtos.length; i++) {
            total += this.produtos[i].getPreco();
        }
        console.log("TOTAL: R$ ".concat(total.toFixed(2)));
    };
    return CarrinhoDeCompras;
}());
var produto1 = new Produto("Rapador de coco", 29.99);
var produto2 = new Produto("Furador de coco", 19.99);
var produto3 = new Produto("Canudo pra beber coco", 2.63);
var lista = [produto1, produto2, produto3];
var carrinho1 = new CarrinhoDeCompras(lista);
carrinho1.CalcularTotal();

var Endereco = /** @class */ (function () {
    function Endereco(rua, cidade, cep) {
        this.rua = rua;
        this.cidade = cidade;
        this.cep = cep;
    }
    Endereco.prototype.mostrar_endereco = function () {
        console.log("".concat(this.rua, ", ").concat(this.cidade, ", cep: ").concat(this.cep));
    };
    return Endereco;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
    }
    Pessoa.prototype.mostrar_endereco = function () {
        console.log(this.nome);
        this.endereco.mostrar_endereco();
    };
    return Pessoa;
}());
var ender = new Endereco("Rua Sérgio Trevisan", "São Paulo", "390");
var gabs = new Pessoa("Gabriel Gonçalves", ender);
gabs.mostrar_endereco();

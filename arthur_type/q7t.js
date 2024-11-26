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
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    Funcionario.prototype.getSal = function () {
        return this.salario;
    };
    return Funcionario;
}());
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nome, salario, bonus) {
        var _this = _super.call(this, nome, salario) || this;
        _this.bonus = bonus;
        return _this;
    }
    Gerente.prototype.CalcularTotal = function () {
        console.log(this.salario + this.bonus);
    };
    return Gerente;
}(Funcionario));
//let geras = new Gerente("Geraldo",5635.87,200)
//geras.CalcularTotal()
var Desenvolvedor = /** @class */ (function (_super) {
    __extends(Desenvolvedor, _super);
    function Desenvolvedor(nome, salario, nivel) {
        var _this = _super.call(this, nome, salario) || this;
        if (nivel == "Junior" || nivel == "Pleno" || nivel == "Senior") {
            _this.nivel = nivel;
        }
        else {
            _this.nivel = "Junior";
        }
        return _this;
    }
    Desenvolvedor.prototype.promover = function () {
        switch (this.nivel) {
            case "Junior":
                this.salario += 300;
                break;
            case "Pleno":
                this.salario += 500;
                break;
            case "Senior":
                this.salario += 1000;
                break;
        }
    };
    Desenvolvedor.prototype.setNivel = function (newlevel) {
        if (newlevel == "Junior" || newlevel == "Pleno" || newlevel == "Senior") {
            this.nivel = newlevel;
        }
    };
    return Desenvolvedor;
}(Funcionario));
var dev = new Desenvolvedor("Trojan", 500, "Junior");
console.log(dev.getSal());
dev.promover();
console.log(dev.getSal());
dev.setNivel("Pleno");
dev.promover();
console.log(dev.getSal());
dev.setNivel("Senior");
dev.promover();
console.log(dev.getSal());

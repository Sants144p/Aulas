"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    Funcionario.prototype.Aumento = function (valor) {
        this.salario += valor;
    };
    Funcionario.prototype.Decrescmento = function (valor) {
        this.salario -= valor;
    };
    Funcionario.prototype.CalcularSalárioTotal = function () {
        console.log("".concat(this.nome, " recebe um sal\u00E1rio equivalente a R$").concat(this.salario.toFixed(2)));
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nome, salario, bonus) {
        var _this = _super.call(this, nome, salario) || this;
        _this.bonus = bonus;
        return _this;
    }
    Gerente.prototype.CalcularSalárioTotal = function () {
        this.salario += this.bonus;
        console.log("O Gerente ".concat(this.nome, " recebe um sal\u00E1rio que junto aos bon\u00FBs equivale a R$").concat(this.salario.toFixed(2)));
    };
    return Gerente;
}(Funcionario));
exports.Gerente = Gerente;
var faustao = new Gerente("Fausto Corrêa da Silva", 50000.00, 15000.00);
var alanzoka = new Funcionario("Alan Ferreira Pereira", 400);
alanzoka.CalcularSalárioTotal();
faustao.CalcularSalárioTotal();

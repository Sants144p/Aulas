"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBancaria = void 0;
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    ContaBancaria.prototype.Depositar = function (valor) {
        this.saldo += valor;
        console.log("Depósito Realizado");
    };
    ContaBancaria.prototype.Sacar = function (valor) {
        this.saldo -= valor;
        console.log("Dinheiro Sacado");
    };
    ContaBancaria.prototype.MostrarSaldo = function () {
        console.log("O titular dessa conta \u00E9 ".concat(this.titular, " \nO saldo atual da conta \u00E9 de R$").concat(this.saldo.toFixed(2), "\n ------------------------------------------------------------------"));
    };
    return ContaBancaria;
}());
exports.ContaBancaria = ContaBancaria;
var monark = new ContaBancaria("Bruno Monteiro Aiub (Monark)", 22000.00);
monark.MostrarSaldo();
monark.Depositar(1200.00);
monark.MostrarSaldo();
monark.Sacar(5300.00 + 3200.00);
monark.MostrarSaldo();

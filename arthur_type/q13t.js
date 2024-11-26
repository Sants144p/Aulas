"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta(saldo) {
        this.saldo = saldo;
    }
    Conta.prototype.depositar = function (valor) {
        this.saldo += valor;
    };
    Conta.prototype.getSaldo = function () {
        return this.saldo;
    };
    return Conta;
}());
exports.Conta = Conta;

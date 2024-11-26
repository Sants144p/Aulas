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
exports.ContaPoupanca = void 0;
var q13t_1 = require("./q13t");
var ContaPoupanca = /** @class */ (function (_super) {
    __extends(ContaPoupanca, _super);
    function ContaPoupanca(saldo, taxa) {
        var _this = _super.call(this, saldo) || this;
        _this.taxa = taxa;
        return _this;
    }
    ContaPoupanca.prototype.depositar = function (valor) {
        this.saldo += ((1 + this.taxa) * valor);
    };
    return ContaPoupanca;
}(q13t_1.Conta));
exports.ContaPoupanca = ContaPoupanca;
var contanormal = new q13t_1.Conta(1200);
var contapoupanca = new ContaPoupanca(1200, 0.50);
contanormal.depositar(500);
contapoupanca.depositar(500);
console.log(contanormal.getSaldo());
console.log(contapoupanca.getSaldo());

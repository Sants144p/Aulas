var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(saldo, salario, titular) {
        this.saldo = saldo;
        this.salario = salario;
        this.titular = titular;
    }
    ContaBancaria.prototype.depositar = function (dinheiro) {
        this.saldo += dinheiro;
    };
    ContaBancaria.prototype.sacar = function (dinheiro) {
        this.saldo -= dinheiro;
    };
    ContaBancaria.prototype.recebersalario = function () {
        this.saldo += this.salario;
    };
    ContaBancaria.prototype.mostrarSaldo = function () {
        console.log("".concat(this.titular, " tem R$ ").concat(this.saldo.toFixed(2)));
        if (this.saldo < 1000) {
            console.log("pobre");
        }
    };
    return ContaBancaria;
}());
var conta = new ContaBancaria(220, 1320, "Robson");
conta.depositar(450);
conta.sacar(300);
conta.recebersalario();
conta.sacar(999);
conta.mostrarSaldo();

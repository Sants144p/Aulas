export class Conta {
    protected saldo : number;
    constructor(saldo : number){
        this.saldo = saldo;
    }
    depositar(valor : number) : void{
        this.saldo+=valor;
    }
    getSaldo() : number{
        return this.saldo;
    }
}
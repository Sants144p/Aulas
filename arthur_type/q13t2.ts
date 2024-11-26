import {Conta} from './q13t';
export class ContaPoupanca extends Conta{
    private taxa : number;
    constructor(saldo:number,taxa:number){
        super(saldo);
        this.taxa = taxa;
    }
    depositar(valor:number) : void{
        this.saldo += ((1+this.taxa) * valor);
    }
}

let contanormal = new Conta(1200)
let contapoupanca = new ContaPoupanca(1200,0.50)

contanormal.depositar(500)
contapoupanca.depositar(500)

console.log(contanormal.getSaldo())
console.log(contapoupanca.getSaldo())
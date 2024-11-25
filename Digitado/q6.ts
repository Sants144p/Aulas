export class ContaBancaria {

    private titular : string
    private saldo : number

    constructor(titular : string, saldo : number){
        
        this.titular = titular
        this.saldo = saldo

    }

    Depositar(valor : number){

        this.saldo += valor

        console.log("Depósito Realizado")

    }

    Sacar(valor : number){

        this.saldo -= valor

        console.log("Dinheiro Sacado")
    }

    MostrarSaldo() : void{

        console.log(`O titular dessa conta é ${this.titular} \nO saldo atual da conta é de R$${this.saldo.toFixed(2)}\n ------------------------------------------------------------------`)
    }
}

let monark = new ContaBancaria("Bruno Monteiro Aiub (Monark)", 22000.00)

monark.MostrarSaldo()
monark.Depositar(1200.00)
monark.MostrarSaldo()
monark.Sacar(5300.00 + 3200.00)
monark.MostrarSaldo()
monark.Sacar(14700)
monark.MostrarSaldo()
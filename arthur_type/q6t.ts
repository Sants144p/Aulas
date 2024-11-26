class ContaBancaria {
    private saldo : number;
    private salario : number;
    private titular : string;

    constructor(saldo:number,salario:number, titular : string){
        this.saldo = saldo;
        this.salario = salario;
        this.titular = titular;
    }

    depositar(dinheiro : number) : void {
        this.saldo += dinheiro;
    }
    sacar(dinheiro : number) : void {
        this.saldo -= dinheiro;
    }
    recebersalario() : void {
        this.saldo += this.salario
    }

    mostrarSaldo() : void {
        console.log(`${this.titular} tem R$ ${this.saldo.toFixed(2)}`)
        if (this.saldo < 1000){
            console.log("pobre")
        }
    }
}

let conta = new ContaBancaria(220,1320,"Robson")
conta.depositar(450)
conta.sacar(300)
conta.recebersalario()
conta.sacar(999)
conta.mostrarSaldo()
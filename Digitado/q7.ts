export class Funcionario{

    protected nome : string
    protected salario : number

    constructor(nome : string, salario : number){
        
        this.nome = nome
        this.salario = salario

    }

    Aumento(valor : number){

        this.salario += valor

    }

    Decrescmento(valor : number){

        this.salario -= valor

    }

    CalcularSalárioTotal(){

        console.log(`${this.nome} recebe um salário equivalente a R$${this.salario.toFixed(2)}`)
    }


}

export class Gerente extends Funcionario{

    protected bonus : number

    constructor(nome : string, salario : number, bonus : number){
        
        super(nome, salario)
        this.bonus = bonus

    }

    CalcularSalárioTotal(): void {
        
        this.salario += this.bonus

        console.log(`O Gerente ${this.nome} recebe um salário que junto aos bonûs equivale a R$${this.salario.toFixed(2)}`)
    }

}



let faustao = new Gerente("Fausto Corrêa da Silva", 50000.00, 15000.00)
let alanzoka = new Funcionario("Alan Ferreira Pereira", 400)

alanzoka.CalcularSalárioTotal()
faustao.CalcularSalárioTotal()
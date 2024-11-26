import { Funcionario } from "./Funcionario";   

export class Gerente extends Funcionario{

    private _bonus : number

    constructor(nome : string, cargo : string, salario : number, bonus : number){

        super(nome, cargo, salario)
        this._bonus = bonus
    }

    public get bonus() : number{
        return this.bonus
    }

    set bonus(valor : number){
    
        if (valor > 0){
            this._bonus = this.bonus
        }else{
            console.log("Valor de bonûs inválido")
        }
    }

    descricao(){

        console.log(`${this.nome} tem um cargo de ${this._salario} é um Gerente\nRecebe um salário equivalente a R$${this._salario.toFixed(2)} com um bonûs de R$${this._bonus.toFixed(2)}\nQue no total equivale a R$${this._salario.toFixed(2) + this._bonus.toFixed(2)}`)

    }

    
}

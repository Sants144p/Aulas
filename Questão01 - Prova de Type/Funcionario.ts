export class Funcionario{

    protected _nome : string
    protected _cargo : string
    protected _salario : number

    constructor(nome : string, cargo : string, salario : number){

        this._nome = nome
        this._cargo = cargo
        this._salario = salario

    }

    public get nome() : string{
        return this.nome
    }

    public get cargo() : string{
        return this.cargo
    }

    aplicarAumento(percentual : number){

        if (percentual > 0){

            this._salario = this._salario + (this._salario * percentual)
        }else{
            console.log("Valor de percentual para aumento inválido")
        }
    }

    descricao(){

        console.log(`${this.nome} tem um cargo de ${this._salario} e recebe um salário equivalente a R$${this._salario.toFixed(2)}`)

    }
}
import { Funcionario } from "./Funcionario"
import { Gerente } from "./Gerente"

export class Empresa{

    protected nome : string
    private funcionarios : Funcionario[] = []

    constructor(nome : string, funcionarios : Funcionario[] = []){

        this.nome = nome
        this.funcionarios = funcionarios
    }

    adicionarFuncionario(funcionario: Funcionario){

        this.funcionarios.push(funcionario)
        console.log("Funcionário Adicionado")

    }

    listarFuncionarios() : void{

        console.log("LISTAGEM DE FUNCIONARIOS")

        this.funcionarios.forEach(funcionario => {
        
            console.log(" -" + funcionario.descricao())
    
        });
    }


}
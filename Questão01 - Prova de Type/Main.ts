import { Funcionario } from "./Funcionario";
import { Gerente } from "./Gerente";
import { Empresa } from "./Empresa";


let TechSoluções = new Empresa("Tech Soluções")

let fun1 = new Funcionario("Pedro", "Zelador", 100)
let fun2 = new Funcionario("João", "Manutenção", 1000)
let fun3 = new Funcionario("Julio", "Programador", 2000)

let ger1 = new Gerente("Carlos", "Administrador", 4000, 500)
let ger2 = new Gerente("José", "Administrador", 4000, 300)

TechSoluções.adicionarFuncionario(fun1)
TechSoluções.adicionarFuncionario(fun2)
TechSoluções.adicionarFuncionario(fun3)
TechSoluções.adicionarFuncionario(ger1)
TechSoluções.adicionarFuncionario(ger2)

TechSoluções.listarFuncionarios()
fun1.aplicarAumento(0.1)
fun2.aplicarAumento(0.15)
ger1.aplicarAumento(0.1)
ger2.bonus = 400
TechSoluções.listarFuncionarios()


class Funcionario {
    private nome : string;
    protected salario : number;

    constructor(nome : string, salario : number){
        this.nome = nome;
        this.salario = salario;
    }

    getSal() : number {
        return this.salario;
    }
}
class Gerente extends Funcionario {
    private bonus : number
    constructor(nome: string, salario : number, bonus : number){
        super(nome,salario);
        this.bonus = bonus;
    }
    CalcularTotal() : void {
        console.log(this.salario + this.bonus)
    }
}

//let geras = new Gerente("Geraldo",5635.87,200)
//geras.CalcularTotal()

class Desenvolvedor extends Funcionario {
    private nivel : string;

    constructor(nome: string, salario: number, nivel : string){
        super(nome,salario)
        if (nivel == "Junior" || nivel == "Pleno" || nivel == "Senior"){
            this.nivel = nivel;
        }else{
            this.nivel = "Junior"
        }
    }

    promover(){
        switch(this.nivel) {
            case "Junior" :
                this.salario+=300;
                break;
            case "Pleno" :
                this.salario+=500;
                break;
            case "Senior" :
                this.salario+=1000;
                break;
        }
    }
    setNivel(newlevel : string) : void {
        if (newlevel == "Junior" || newlevel == "Pleno" || newlevel == "Senior"){
            this.nivel = newlevel;
        }
    }
}

let dev = new Desenvolvedor("Trojan",500,"Junior")
console.log(dev.getSal())
dev.promover()
console.log(dev.getSal())
dev.setNivel("Pleno")
dev.promover()
console.log(dev.getSal())
dev.setNivel("Senior")
dev.promover()
console.log(dev.getSal())
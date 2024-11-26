class Carro {
    private marca : string;
    private modelo : string;
    private ano : number;

    constructor (marca : string, modelo : string, ano){
        this.marca = marca;
        this.modelo = modelo;
        if (ano !== null){
            this.ano = ano;
        }else{
            this.ano = 2022;
        }
    }
    printAno() : void {
        console.log(this.ano)
    }
}

let carrofodãofodasekkkk = new Carro("Volkswagen","Gol",2024)
let carr = new Carro("Volkswagen","Gol",null)

carrofodãofodasekkkk.printAno()
carr.printAno()
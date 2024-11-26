var Carro = /** @class */ (function () {
    function Carro(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        if (ano !== null) {
            this.ano = ano;
        }
        else {
            this.ano = 2022;
        }
    }
    Carro.prototype.printAno = function () {
        console.log(this.ano);
    };
    return Carro;
}());
var carrofodãofodasekkkk = new Carro("Volkswagen", "Gol", 2024);
var carr = new Carro("Volkswagen", "Gol", null);
carrofodãofodasekkkk.printAno();
carr.printAno();

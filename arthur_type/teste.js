var Circulo = /** @class */ (function () {
    function Circulo(raio, x, y) {
        this.raio = raio;
        this.x = x;
        this.y = y;
    }
    Circulo.prototype.getRaio = function () {
        return this.raio;
    };
    Circulo.prototype.setRaio = function (r) {
        if (r > 0) {
            this.raio = r;
        }
        else {
            console.log("saporra nem faz sentido");
        }
    };
    Circulo.prototype.exibir = function () {
        return "Raio: ".concat(this.raio, ", x: ").concat(this.x, ", y: ").concat(this.y);
    };
    Circulo.prototype.mover = function (x, y) {
        this.x += x;
        this.y += y;
    };
    Circulo.prototype.aumentar = function (r) {
        this.raio += r;
    };
    return Circulo;
}());
var circulo1 = new Circulo(2, 0, 0);
var circulo2 = new Circulo(3, 5, 2);
console.log(circulo1.exibir());
console.log(circulo2.exibir());
circulo1.mover(2, 2);
circulo1.aumentar(5);
circulo2.mover(3, 2);
circulo2.aumentar(6);
console.log(circulo1.exibir());
console.log(circulo2.exibir());
console.log(circulo1.getRaio());
circulo1.setRaio(-666);
console.log(circulo1.getRaio());

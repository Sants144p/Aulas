class Circulo {
    private raio: number;
    private x: number;
    private y:number;

    constructor(raio: number, x: number, y: number) {
        this.raio = raio;
        this.x = x;
        this.y = y;
    }

    getRaio() : number {
        return this.raio;
    }
    setRaio(r: number) : void {
        if (r > 0){
            this.raio = r;
        }
        else {
            console.log("saporra nem faz sentido")
        }
    }

    exibir() : string {
        return `Raio: ${this.raio}, x: ${this.x}, y: ${this.y}`;
    }

    mover(x: number, y: number) : void {
        this.x += x;
        this.y += y;
    }

    aumentar(r: number) : void{
        this.raio += r;
    }
}

let circulo1 = new Circulo(2,0,0);
let circulo2 = new Circulo(3,5,2)

console.log(circulo1.exibir());
console.log(circulo2.exibir());

circulo1.mover(2,2)
circulo1.aumentar(5)

circulo2.mover(3,2)
circulo2.aumentar(6)

console.log(circulo1.exibir());
console.log(circulo2.exibir());

//console.log(circulo1.getRaio());
//circulo1.setRaio(-666);
//console.log(circulo1.getRaio());
class Circulo {
    private raio: number;
    private x: number;
    private y: number;

    constructor(raio: number, x: number, y: number) {
        this.raio = raio;
        this.x = x;
        this.y = y;
    }
    
    getRaio() : number {
        return this.raio;
    }
    setRaio(r: number) : void {
        if (r <= 0)
            console.log('Você já estudou Geometria??');
        else if (r > 15)
            console.log('Raio não alterado. Limite ultrapassado.');
        else
            this.raio = r;
    }

    mover(x: number, y: number) : void {
        this.x += x; // this.x = this.x + x;
        this.y += y; // this.y = this.y + y;
    }

    aumentar(r: number) : void {
        this.raio += r;
    }

    exibir() : string {
        return `Raio: ${this.raio}, X: ${this.x}, Y: ${this.y}`;
    }
}

/*let circulo1 = new Circulo(2, 0, 0);
console.log(circulo1.exibir());
circulo1.aumentar(5);
console.log(circulo1.exibir());
circulo1.mover(2, 4);
console.log(circulo1.exibir());*/

let circulo2 = new Circulo(3, 5, 2);
console.log(circulo2.exibir());
circulo2.setRaio(-4);
console.log(circulo2.getRaio());
console.log(circulo2.exibir());
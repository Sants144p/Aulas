class Animal {

    nome : string

    constructor(nome: string){

        this.nome = nome

    }

    emitirSom(): void{

        console.log("Som do Animal")

    }

    public mover(distancia: number): void{

        console.log(`${this.nome} moveu-se ${distancia}`)

    }

}

class Cachorro extends Animal {

    constructor(nome: string){
        super(nome)
    }
    emitirSom(): void {
        console.log("au au au au au au")
    }
    pegar(objeto: string): void{
        console.log(`${this.nome} pegou ${objeto}`)
    }
}

let animal = new Animal("Ornitorrinco")
animal.emitirSom()
animal.mover(10)

let puddle = new Cachorro("Cachorro de Rico")
puddle.emitirSom()
puddle.mover(4)
puddle.pegar("Nota de R$100,00")
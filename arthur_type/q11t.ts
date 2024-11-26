class InstrumentoMusical{
    tocar() : void{
    }
}
class Violao extends InstrumentoMusical{
    tocar() : void{
        console.log("Tocando violão, porra")
    }
}
class Piano extends InstrumentoMusical{
    tocar() : void{
        console.log("Tocando piano, caralho")
    }
}

let instrumentos : InstrumentoMusical[] = [new Violao(), new Piano()]
instrumentos.forEach(instrumento => 
    instrumento.tocar()
)
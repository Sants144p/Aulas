import { Filme } from "./Filme";

export class Catalogo{

    protected filmes : Filme[] = []

    constructor(filmes : Filme[] = []){

        this.filmes = filmes
    }

    adicionarFilme(filme : Filme){

        this.filmes.push(filme)
        console.log("Filme Adicionado")

    }

    listarFilmes() : void{

        console.log("LISTAGEM DE FILMES")

        this.filmes.forEach(filme => {
        
            console.log(" -" + filme.calcularMediaAvaliacoes())
    
        });
    }
}
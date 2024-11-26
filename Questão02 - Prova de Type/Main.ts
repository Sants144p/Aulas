import { Filme } from "./Filme";
import { Catalogo } from "./Catalogo";

function filtrarFilmesPorAno(filmes : Filme[], ano : number) : Filme[]

let filme1 = new Filme("A Origem", "Christopher Nolan", 2010, 5)
let filme2 = new Filme("Insterstelar", "Christopher Nolan", 2014, 5)
let filme3 = new Filme("Matrix", "Lana e Lilly Wachowski", 1999, 4)
let filme4 = new Filme("Pulp Fiction: Tempo de Violência", "Quentin Tarantino", 1994, 5)
let filme5 = new Filme("Duna", "Villeneuve", 2021, 5)

filme1.calcularMediaAvaliacoes()
filme2.calcularMediaAvaliacoes()
filme3.calcularMediaAvaliacoes()
filme4.calcularMediaAvaliacoes()
filme5.calcularMediaAvaliacoes()

let catalogo = new Catalogo()

catalogo.adicionarFilme(filme1)
catalogo.adicionarFilme(filme2)
catalogo.adicionarFilme(filme3)
catalogo.adicionarFilme(filme4)
catalogo.adicionarFilme(filme5)

catalogo.listarFilmes()

filtrarFilmesPorAno(filmes, 2000)



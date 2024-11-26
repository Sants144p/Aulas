class Livro {
    protected titulo: string;
    protected autor: string;
    protected preco: number;

    constructor(titulo: string, autor: string, preco: number){
        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
    }

    getTitulo() : string {
        return this.titulo;
    }
    setTitulo(t: string) : void {
        this.titulo = t;
    }
    getAutor() : string {
        return this.autor;
    }
    setAutor(a: string) : void {
        this.autor = a;
    }
    getPreco() : number {
        return this.preco;
    }
    setPreco(p: number) : void {
        if (p >= 0){
            this.preco = p;
        } else {
            console.log("ERRO: Valor negativo")
        }
    }

    descricao() : string {
        return `
Livro: ${this.titulo}
autor: ${this.autor}
preço: R$ ${this.preco.toFixed(2)}
-----------------------------------`
    }
}

let livro1 = new Livro("Como fazer um acelerador de partículas com um pedaço de pau e uma fita isolante","Trojan",29.99)
let livro2 = new Livro("A Revolução dos Bixos","George Orwell",12.99)
let livro3 = new Livro("Boa noite Punpun","Inio Asano",45.99)

class Biblioteca {
    livros : Livro[]

    constructor(livros: Livro[]) {
        this.livros = livros
    }

    listar():void{
        this.livros.forEach(livro => {
            console.log(livro.descricao())
        });
    }
    Adicionar(livro : Livro){
        this.livros.push(livro)
    }
}
class LivroDigital extends Livro {
    protected formato : string
    constructor(titulo: string, autor: string, preco: number, formato: string){
        super(titulo,autor,preco)
        this.formato = formato
    }
    getFormato() : string {
        return this.formato;
    }
    setFormato(f: string) : void {
        this.formato = f;
    }
    descricao() : string {
        return `
Livro: ${this.titulo}
autor: ${this.autor}
preço: R$ ${this.preco.toFixed(2)}
formato: ${this.formato}
-----------------------------------`
    }
}




//let lista_livros = [livro1,livro2,livro3]
//let biblio = new Biblioteca(lista_livros)
//console.log("biblioteca sem o quarto livro")
//biblio.listar()
//console.log("adicionando o livro")
//let livro4 = new Livro("Berserk", "Kentaro Miura", 65.99)
//biblio.Adicionar(livro4)
//console.log("biblioteca com o livro adicionado")
//biblio.listar()

let livrodigital = new LivroDigital("Teste de livro digital","digital",99.99,"PDF")
console.log(livrodigital.descricao())
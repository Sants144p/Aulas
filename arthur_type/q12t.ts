class Endereco{
    private rua : string;
    private cidade : string;
    private cep : string;

    constructor(rua:string,cidade:string,cep:string){
        this.rua = rua;
        this.cidade = cidade;
        this.cep = cep;
    }

    mostrar_endereco() : void {
        console.log(`${this.rua}, ${this.cidade}, cep: ${this.cep}`)
    }
}

class Pessoa{
    private nome : string;
    private endereco : Endereco;

    constructor(nome:string,endereco:Endereco){
        this.nome = nome;
        this.endereco = endereco;
    }

    mostrar_endereco() : void{
        console.log(this.nome)
        this.endereco.mostrar_endereco()
    }
}

let ender = new Endereco("Rua Sérgio Trevisan","São Paulo","390")
let gabs = new Pessoa("Gabriel Gonçalves",ender)

gabs.mostrar_endereco()
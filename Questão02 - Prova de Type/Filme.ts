export class Filme {

    protected _titulo : string
    protected _diretor : string
    protected _anoLancamento : number
    protected _avaliacoes : Filme[] = []

    constructor(titulo : string, diretor : string, _anoLancamento : number, avaliacoes : Filme[] = []){

        this._titulo = titulo
        this._diretor = diretor
        this._anoLancamento = _anoLancamento
        this._avaliacoes = avaliacoes
    }

    public get titulo() : string{
        return this.titulo
    }

    public get diretor() : string{
        return this.diretor
    }

    public get anoLancamento() : number{
        return this.anoLancamento
    }
    public get avaliacoes() : Filme[]{
        return this.avaliacoes
    }
    
    adicionarAvaliacao(nota : number){

        if (nota >= 1 && nota <= 5){

            this.avaliacoes.push(nota)

        }else{

            console.log("Nota inválida, deve ser de 1 até 5")
        }

    }

    calcularMediaAvaliacoes(){


        
        console.log(`O filme ${this.titulo} dirigido por ${this.diretor} lançado no ano de ${this.anoLancamento} teve a média de avaliações equivalente à MEDIA`)

    }

}
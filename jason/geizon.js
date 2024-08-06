const pessoa = {
	nome: "Jason Voorhees",
	idade: 78,
	profissao: {cargo: "Serial-Killer", vitimas: "pessoas"},
	saudacao: function() {
		return `Nome: ${this.nome}, Idade: ${this.idade},
        Profissão: ${this.profissao.cargo} de ${this.vitimas}`
        `Kill Kill, Mama, Eu sou ${this.nome}`;
	}
};



const jsonString = JSON.stringify(pessoa, null, 2); //stringify() = transforma em json
console.log(jsonString); // {"nome":"Jason Voorhees","idade":78,"profissao":"Serial-Killer"}

//-----------------------------------------------------------------------------------------------------//

const jsonString2 = '{"nome":"Freddy Krueguer","idade":86,"profissao":"Serial-Killer"}';
const pessoa2 = JSON.parse(jsonString2);
console.log(jsonString2);
console.log(pessoa2.nome); //Freddy Krueguer

function exibir() { 
    return `Nome: ${pessoa2.nome}, Idade: ${pessoa2.idade}, Profissão: ${pessoa2.profissao}` 
}
console.log(exibir())
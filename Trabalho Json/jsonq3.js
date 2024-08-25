function buscarJogos(){
    const nomeEquipe = document.getElementById('equipe').value.trim();
    if (!nomeEquipe) {
        alert('Por favor, digite o nome da equipe.');
        return;
    }

    const url_jogos = 'https://worldcupjson.net/matches';

    fetch(url_jogos)
        .then(response => response.json())
        .then(data => {
            const jogosEquipe = data.filter(jogo => {
                return jogo.home_team.name.toLowerCase().includes(nomeEquipe.toLowerCase()) || jogo.away_team.name.toLowerCase().includes(nomeEquipe.toLowerCase());
            })

    const result = jogosEquipe.map(jogo => {
        return `
            </br>
            Data: ${jogo.datetime} </br>
            Disputa: ${jogo.home_team.name} x ${jogo.away_team.name} </br>
            Placar: ${jogo.home_score} - ${jogo.away_score} </br>
            Localização: ${jogo.location} </br>
            Estádio: ${jogo.venue} </br>
    `
    }).join('');

    document.getElementById('resultado').innerHTML = result;
    })

}


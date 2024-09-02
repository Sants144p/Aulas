async function buscarJogos(){
    const nomeEquipe = document.getElementById('equipe').value
    console.log(nomeEquipe)
    if (!nomeEquipe) {
        document.getElementById('resultado').innerHTML = '<p class="error">Por favor, selecione uma equipe.</p>';
        return;
    }

    const url_jogos = 'https://worldcupjson.net/matches';
    const arq_bandeiras = 'flags.json'

    await fetch(arq_bandeiras)
        .then(response => response.json())
        .then(data => {
            const bandeiraUrl = data[nomeEquipe];
            if (bandeiraUrl) {
                document.getElementById('flag').src = bandeiraUrl;
            } else {
                document.getElementById('flag').src = ''; // Limpa a imagem se a equipe não for encontrada
                alert('Bandeira não encontrada para a equipe especificada.');
            }
        })

    await fetch(url_jogos)
        .then(response => response.json())
        .then(data => {
            const jogosEquipe = data.filter(jogo => {
                return jogo.home_team.name.toLowerCase().includes(nomeEquipe.toLowerCase()) || jogo.away_team.name.toLowerCase().includes(nomeEquipe.toLowerCase());
            })

    const result = jogosEquipe.map(jogo => {
        return `
        <div>
            Data: ${new Date(jogo.datetime).toLocaleString('pt-BR')} </br>
            Data: ${jogo.datetime} </br>
            Disputa: ${jogo.home_team.name} x ${jogo.away_team.name} </br>
            Placar: ${jogo.home_team.goals} - ${jogo.away_team.goals} </br>
            Penaltis: ${jogo.home_team.penalties} - ${jogo.away_team.penalties} </br>
            Vencedor: ${jogo.winner} </br>
            Localização: ${jogo.location} </br>
            Estádio: ${jogo.venue} </br>
        </div>

    `
    }).join('');

    console.log(result)

    document.getElementById('resultado').innerHTML = result
    
    })

}
function buscarJogos() {
    const nomeEquipe = document.getElementById('equipe').value.trim();
    if (!nomeEquipe) {
        alert('Por favor, digite o nome da equipe.');
        return;
    }

    fetch('https://worldcupjson.net/matches')
        .then(response => response.json())
        .then(data => {
            const jogosEquipe = data.filter(jogo => {
                return jogo.home_team.name.toLowerCase().includes(nomeEquipe.toLowerCase()) || jogo.away_team.name.toLowerCase().includes(nomeEquipe.toLowerCase());
            });

            const resultadoHTML = jogosEquipe.map(jogo => {
                return `
                    <div class="jogo">
                        <div class="equipes">${jogo.home_team.name} vs ${jogo.away_team.name}</div>
                        <div class="placar">${jogo.home_score} - ${jogo.away_score}</div>
                        <div>Data: ${jogo.datetime}</div>
                    </div>
                `;
            }).join('');

            document.getElementById('resultado').innerHTML = resultadoHTML;
        })
        .catch(error => console.error('Erro ao buscar jogos:', error));
}
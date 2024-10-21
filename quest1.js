const url = `https://api.nobelprize.org/v1/prize.json`
const ano = document.getElementById("ano").value

const resultado = document.getElementById("resultado")

function buscar(){
    const urlano = `https://api.nobelprize.org/v1/prize.json?year=${ano}`

    fetch(urlano)
    .then(response => response.json())
    .then(lista => listar(lista))

}

function listar(lista) {

    let resultadoHtml = '';

    // Filtra os prêmios pelo ano
    lista.forEach(elemento => {
        elemento.prizes.forEach(prize => {
            let categoria = capitalizeFirstLetter(prize.category); // Capitaliza a primeira letra da categoria
            let motivacao = prize.motivation || 'Motivação não disponível'; // Verifica se a motivação existe

            // Verifica se há laureados
            let vencedores = '';
            if (prize.laureates && prize.laureates.length > 0) {
                vencedores = prize.laureates.map(laureate => 
                    `${laureate.firstname} ${laureate.surname}`
                ).join(', ');
            } else {
                vencedores = 'Nenhum vencedor encontrado';
            }

            // Adiciona as informações ao HTML
            resultadoHtml += `
                <div class="result">
                    <h2>Categoria: ${categoria}</h2>
                    <p><strong>Vencedores:</strong> ${vencedores}</p>
                    <p><strong>Motivação:</strong> ${motivacao}</p>
                </div>
                <hr>
            `;
            });
    
    });


    if (resultadoHtml === '') {
        resultado.innerHTML = `<p>Não foram encontrados prêmios para o ano ${ano}.</p>`;
    } else {
        resultado.innerHTML = resultadoHtml;
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
        






function submeterInfo() {
    let confirma = confirm("Você gostaria de prosseguir com a ação?");

    if (confirma == true) {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    
    document.getElementById("resultado").innerHTML = 
        "<h3>Informações Recebidas</h3>" +
        "<p>Seu nome é: " + nome + " " +sobrenome;
    
    } else {

        document.getElementById("resultado").InnerHTML =
            "<h2>Ação Cancelada</h2>";
    }
}


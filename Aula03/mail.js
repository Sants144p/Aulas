function submeterFormulario() {
    let confirma = confirm("Você gostaria de prosseguir com a ação?");

    if (confirma == true) {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("pwd").value;
    
    document.getElementById("resultado").innerHTML = 
        "<h3>Informações Recebidas</h3>" +
        "<p>Nome: " + nome + "</p>" +
        "<p>E-mail: " + email + "</p>" +
        `<p>Senha: ${senha}</p>`;
    
    } else {

        document.getElementById("resultado").InnerHTML =
            "<h2>Ação Cancelada</h2>";
    }
}


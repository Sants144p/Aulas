function submeterCalculo() {
    let confirma = confirm("Você gostaria de prosseguir com a ação?");

    let imc = Math.ceil(document.getElementById("massa").value / document.getElementById("alt").value**2)
    
    let classe = "Média"

    if (imc < 18.5){

        classe = "Magreza"
    }

    else if (18.5 < imc, imc < 24.9){

        classe = "Normal"
    }

    else  if (24.9 < imc, imc < 29.9){

        classe = "Sobrepeso"
    }

    else if (29.9 < imc, imc < 39.9){

        classe = "Obesidade"
    }

    else{

        classe = "Obesidade Grave"
    }

    if (confirma == true) {
    let massa = document.getElementById("massa").value;
    let alt = document.getElementById("alt").value;
    
    document.getElementById("resultado").innerHTML = 
        "<h3>Informações Recebidas</h3>" +
        "<p>Massa: " + massa + "</p>" +
        "<p>Altura: " + alt + "</p>" +
        "<p>IMC: " + imc + "</p>"  +
        "<p>Classificação: " + classe + "</p>" ;

    } else {

        document.getElementById("resultado").InnerHTML =
            "<h2>Ação Cancelada</h2>";
    }
}
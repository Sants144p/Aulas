function contar() {

    let texto = document.getElementById("texto").value 
    let letra = document.getElementById("letra").value

    let textoup = texto.toUpperCase()
    let letraup = letra.toUpperCase()

    let qntd = 0

    for (i = 0.; i <= texto.length; i++){

        if (textoup[1] == letraup){

            qntd++

        }


    }

    document.getElementById("resultado").innerHTML = `A frase <strong>${textoup}</strong> tem <strong>${qntd}</strong> aparições da letra <strong>${letraup}</strong>` 





}
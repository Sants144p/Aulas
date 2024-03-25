function repetir(){

    let frase = document.getElementById("frase").value
    let num = document.getElementById("vezes").value
    let lista = []
    x = 0

    for (i = 0; i < num; i++){

        lista.push(frase)
        console.log(frase)
        document.getElementById("resultado").innerHTML += (`${frase}</br>`)


    }



}
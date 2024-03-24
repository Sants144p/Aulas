function trocabg(){

    let cor_bg = document.getElementById("corbg").value
    
    document.body.style.backgroundColor = cor_bg

}

function trocatxt(){

    let texto = document.getElementById("textoinserido").value
    let texto_cor = document.getElementById("cortxt").value
    
    document.getElementById("texto_final").innerHTML = `${texto}`
    document.getElementById("texto_final").style.color = texto_cor

}

function mudatxt(){

    let texto_f = document.getElementById("textoinserido").value

    console.log(texto_f)

    document.getElementById("texto_final").innerHTML = `${texto_f}`
}
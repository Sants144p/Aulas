const api = "https://worldtimeapi.org/api/timezone"
result = document.getElementById("result")

fetch(api) 
    .then(response => response.json())
    .then(fusos => pegarfusos(fusos))


function pegarfusos(fusos){

    let select = document.getElementById("select")

    for (let fuso of fusos){ //Percorrer a lista

        let option = new Option(fuso);
        select.options[select.options.length] = option;
    }
}

function exibir_fuso(){

    const timezone = document.getElementById("select").value
    const url = `https://worldtimeapi.org/api/timezone/${timezone}`

    fetch(url) 
    .then(response => response.json())
    .then(data => {

        const datetime = data.datetime
        result.innerHTML = `<b>${timezone}: ${datetime}<br>`


    })





}




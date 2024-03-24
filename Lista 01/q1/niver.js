function anos(){


    let data_atual = new Date();
    let data_niver = new Date(document.getElementById("data").value);

    let idade = data_atual.getFullYear() - data_niver.getFullYear();

    if (data_atual.getMonth() < data_niver.getMonth() ||
        (data_atual.getMonth() === data_niver.getMonth() &&
        data_atual.getDate() < data_niver.getDate())) {

            idade--;
        }

    if (idade >= 0) { 
    document.getElementById('resultado').innerHTML = "Você tem " + idade + " anos";
    }else{

    document.getElementById('resultado').innerHTML = "Você ainda não nasceu";
    }

}
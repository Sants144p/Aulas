function converter(){

    let temp = document.getElementById("temp").value;

    let resultado = document.getElementById("resultado");

    let tipo_conversao = document.querySelector('input[name="tipo_convertor"]:checked').value

    if (tipo_conversao === "celsius_fahrenheit"){

        let final = (temp * 1.8) + 32
        
        resultado.innerHTML = final.toFixed(2) + "°F"

    } else if (tipo_conversao === "fahrenheit_celsius"){

        let final = (temp - 32) * 5/9;

        resultado.innerHTML = final.toFixed(2) + "°C"

    }else{

        resultado.innerHTML = "Selecione uma das opções por favor!"

    }

}
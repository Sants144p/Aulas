function descobrir(){

    num = document.getElementById("num").value

    if (num%2 === 0){
        
        document.getElementById('resultado').innerHTML = "Par"

    }
    else if (num%2 != 0){
        
        document.getElementById('resultado').innerHTML = "Impar"

    }
}
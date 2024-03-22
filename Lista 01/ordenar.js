function submitar(){

    let lista = []
    let num = document.getElementById("num").value
    let tipo_ordem = document.querySelector('input[name="ordem"]:checked').value

    lista.push(num)

    console.log(lista)

    if (tipo_ordem === "crescente"){

        lista.split("")
        lista.sort()

        document.getElementById('resultado').innerHTML = `${lista}`
    }
    else if (tipo_ordem === "decrescente"){

        lista = lista.split("")
        lista = lista.sort()
        lista = lista.reverse()

        document.getElementById('resultado').innerHTML = `${lista}`

    }
    else{

        window.alert("Selecione uma ordem")

    }


}

function limpar(){

    lista = []

}
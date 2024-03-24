let lista = []

function submitar(){

    let num = document.getElementById("num").value
    let tipo_ordem = document.querySelector('input[name="ordem"]:checked').value

    if (!tipo_ordem) {

        window.alert("Selecione uma ordem");
        return;

    }

    if (num === ""){

        if (tipo_ordem === "crescente"){

            lista == lista.sort()
    
            document.getElementById('resultado').innerHTML = `${lista}`
        }
        else if (tipo_ordem === "decrescente"){
        
            lista == lista.sort()
            lista == lista.reverse()
    
            document.getElementById('resultado').innerHTML = `${lista}`
    
        }
        return

    }else if (lista.includes(num)){

        window.alert("Este número já está presente na lista, digite outro")
        return

    }else{

        lista.push(num)

    }




    if (tipo_ordem === "crescente"){

        lista == lista.sort()

        document.getElementById('resultado').innerHTML = `${lista}`
    }
    else if (tipo_ordem === "decrescente"){
        
        lista == lista.sort()
        lista == lista.reverse()

        document.getElementById('resultado').innerHTML = `${lista}`

    }


}

function limpar(){

    lista = [] 
    document.getElementById('resultado').innerHTML = `${lista}`
    document.getElementById('resultado').innerHTML = `[]`

}
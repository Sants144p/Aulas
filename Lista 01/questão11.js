function maior(){

    let lista = document.querySelector('#lista').value
    lista = lista.replace(/ /g, "" )
    lista = lista.split("")
    lista = lista.sort()
    lista = lista.reverse()

    document.getElementById('result').innerHTML = `${lista[0]}`

}

function menor(){

    let lista = document.querySelector('#lista').value
    lista = lista.replace(/ /g, "" )
    lista = lista.split("")
    lista = lista.sort()

    document.getElementById('result').innerHTML = `${lista[0]}`

}
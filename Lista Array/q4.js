function submitar(){

    var lista  = document.getElementById('lista').value.split(',').map(function(item){
        
        return parseInt(item)

    })

    lista = lista.sort()

    for (let i=0; i<lista.lenght, i++){

        if (array[i] == array[i+1]){

            lista[i+1].pop

        }

    }

    document.getElementById('resultado').innerHTML = `${lista}`












}
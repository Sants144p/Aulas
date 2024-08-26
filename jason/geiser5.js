function Listar(){

    const user_id = document.getElementById('user_id').value
    const url = `https://jsonplaceholder.typicode.com/users/${user_id}/todos`

    fetch(url)
    .then (response => response.json())
    .then(lista => lista_atvv(lista))

}

function lista_atvv(lista){

    const lista_atividades = document.getElementById("atividades")
    lista_atividades.innerHTML = ""

    lista.forEach(list => {

        const criar_top = document.createElement('li');
        
        criar_top.innerHTML = `
        <div>
        Atividade: ${list.title} <br>
        </div>
        `;

        if (list.completed){
            criar_top.style.color = 'green'
            criar_top.style.textDecoration = 'line-through'
        }else{
            criar_top.style.color = 'red'
        }
        
        lista_atividades.appendChild(criar_top);
    });

}
function logar(){

    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value


    if (email.includes("@gmail.com") || email.includes("@hotmail.com")){

        if (senha.length > 5){
            document.getElementById('resultado').innerHTML = "Você está logado";
        }else{
            document.getElementById('resultado').innerHTML = "Senha Inválida. Necessita de mais de 5 caracteres"
        } 
    }else{
        document.getElementById('resultado').innerHTML = "Email inválido";
    }
    
}
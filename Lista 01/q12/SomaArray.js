function Soma() {
    var array = document.getElementById('array').value.split(',').map(Number);
    var soma = array.reduce((x, y) => x + y, 0);
    document.getElementById('resultado').innerText = soma;
}
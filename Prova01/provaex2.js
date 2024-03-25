function calcular(){

    let x1 = document.getElementById("n1").value
    let y1 = document.getElementById("n11").value

    let x2 = document.getElementById("n2").value
    let y2 = document.getElementById("n22").value

    let result = Math.sqrt((x2-x1)**2+(y2-y1)**2)

    document.getElementById("resultado").innerHTML = `A distancia entre P1(${x1},${y1}) e P2(${x2},${y2}) é igual a ${result.toFixed(2)}`


}
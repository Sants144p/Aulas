function area() {

    let base = document.getElementById("base").value
    let alt = document.getElementById("alt").value

    let area = base * alt

    document.getElementById("resultado").innerHTML = `${area} m²`


}
function cresce(){
    let list = document.querySelector("#list").value
    list = list.replace(/ /g, "")
    list = list.split("")
    list = list.sort()
    console.log(list)

    document.getElementById('result').innerHTML = `${list}`
}

function decre(){
    let list = document.querySelector("#list").value
    list = list.replace(/ /g, "")
    list = list.split("")
    list = list.sort()
    list = list.reverse()
    console.log(list)

    document.getElementById('result').innerHTML = `${list}`
}
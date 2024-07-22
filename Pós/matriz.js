const matriz1 = [[1,2,3],
               [4,5,6],
               [7,8,9]]

const matriz2 = [[1,2,3],
               [4,5,6],
               [7,8,9]] 

console.table(matriz1)
console.table(matriz2)

const matrizsoma = somamatriz(matriz1, matriz2)

function somamatriz() {

    let result = []
    for (i=0; i<matriz1.length; i++){
        result[i]= []

        for (y=0; y<matriz1[i].length; y++){

            result[i][y] = matriz1[i][y] + matriz2[i][y]
        }
    }

    return result

}

console.table(matrizsoma)
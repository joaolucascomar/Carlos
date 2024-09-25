function soma(num1, num2) {
    return num1 + num2
}

function areaQuadrado(lado) {
    return lado * lado
}

function area(figura) {
    switch (figura) {
        case 'quadrado':
            let lado = parseInt(prompt("Insira o lado do quadrado"))
            return lado * lado
        case 'triangulo':
            let base = parseInt(prompt("Insira a base do triângulo"))
            let altura = parseInt(prompt("Insira a altura do triângulo"))
            return (base * altura) / 2
        default:
            console.log("figura inválida")
    }
}

let media = function(num1, num2, num3) {
    return (num1 + num2 + num3) / 3
}

let mediaArray = function(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i];    
    }
    return total / array.length
}

console.log(media(4, 6, 8))
console.log(soma(2,5));

[0, 5, 6, 8, 5]
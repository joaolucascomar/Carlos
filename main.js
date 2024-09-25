function soma(num1, num2) {
    return num1 + num2
}

function areaQuadrado(lado) {
    return lado * lado
}

function area(figura, lado = 0, base = 0,  altura = 0) {
    switch (figura) {
        case 'quadrado':
            return lado * lado
        case 'triangulo':
            return (base * altura) / 2
        default:
            console.log("figura inválida")
    }
}

let media = function(num1, num2, num3) {
    return (num1 + num2 + num3) / 3
}

console.log(media(4, 6, 8))
console.log(soma(2,5));
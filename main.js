function soma(num1, num2) {
    return num1 + num2
}

function areaQuadrado(lado) {
    return lado * lado
}

function area(figura, lado, base = 0,  altura = 0) {
    switch (figura) {
        case 'quadrado':
            return lado * lado
        case 'triangulo':
            return (base * altura) / 2
        default:
            console.log("inválido")
    }
}

console.log(soma(2,5));
function soma(num1, num2) {
    return num1 + num2
}

function areaQuadrado(lado) {
    return lado * lado
}

function area(figura, lado, altura) {
    switch (figura) {
        case 'quadrado':
            return lado * lado
        case 'triangulo':
            return (lado * altura) / 2
        default:
            console.log("inválido")
    }
}

console.log(soma(2,5));
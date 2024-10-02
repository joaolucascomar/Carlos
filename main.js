// function soma(num1, num2) {
//     return num1 + num2
// }

// function areaQuadrado(lado) {
//     return lado * lado
// }

// function area(figura) {
//     switch (figura) {
//         case 'quadrado':
//             let lado = parseInt(prompt("Insira o lado do quadrado"))
//             return lado * lado
//         case 'triangulo':
//             let base = parseInt(prompt("Insira a base do triângulo"))
//             let altura = parseInt(prompt("Insira a altura do triângulo"))
//             return (base * altura) / 2
//         default:
//             console.log("figura inválida")
//     }
// }

// let mediaArray = function(array) {
//     let total = 0
//     for (let i = 0; i < array.length; i++) {
//         total += array[i];    
//     }
//     return total / array.length
// }

// let media = function(num1, num2, num3) {
//     return (num1 + num2 + num3) / 3
// }

// let num1 = parseInt(prompt("Insira o primeiro número"))
// let num2 = parseInt(prompt("Insira o segundo número"))
// let num3 = parseInt(prompt("Insira o terceiro número"))
// document.write(media(num1, num2, num3))

let estados = ['PR', 'RS', 'SC', 'SP', 'RJ', 'MG', 'ES', 'BA', 'SE', 'CE', 'AL', 'PN', 'PB', 'MA', 'PN', 'PI', 'GO', 'MT', 'MS', 'DF', 'AC', 'AP', 'AM', 'PA', 'RO', 'RR', 'TO'];

let i = 0;

while(i < estados.length) {
    console.log(i);

    i++
}
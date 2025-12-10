let n1 = parseFloat(prompt("Digite a primeira nota:"));
let n2 = parseFloat(prompt("Digite a segunda nota:"));
let n3 = parseFloat(prompt("Digite a terceira nota:"));

let media = (n1 + n2 + n3) / 3;

let resultado = (media >= 6) ? "Aprovado" : "Reprovado";

alert("Média final: " + media.toFixed(2) + "\nResultado: " + resultado);
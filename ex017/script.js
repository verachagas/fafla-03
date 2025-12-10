let temp = parseFloat(prompt("Digite a temperatura:"));
let unidade = prompt('Digite a unidade ("C" para Celsius ou "F" para Fahrenheit):');

// Converte usando operador ternário
let resultado = (unidade === "C" || unidade === "c")
    ? (temp * 9/5) + 32 + " °F"
    : (unidade === "F" || unidade === "f")
        ? (temp - 32) * 5/9 + " °C"
        : "Unidade inválida";

alert("Resultado: " + resultado);
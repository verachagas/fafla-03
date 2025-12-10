let peso = parseFloat(prompt("Digite seu peso (kg):"));
let altura = parseFloat(prompt("Digite sua altura (m):"));

let imc = peso / (altura * altura);

let classificacao =
    imc < 18.5 ? "Abaixo do peso" :
    imc <= 24.9 ? "Peso normal" :
    imc <= 29.9 ? "Sobrepeso" :
    "Obesidade";

alert("IMC: " + imc.toFixed(2) + "\nClassificação: " + classificacao);
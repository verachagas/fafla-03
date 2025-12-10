let temp = parseFloat(prompt("Digite a temperatura em °C:"));

let clima =
    (temp < 15) ? "Frio" :
    (temp <= 25) ? "Agradável" :
    "Quente";

alert("O clima está: " + clima);
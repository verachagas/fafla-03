let nota = parseFloat(prompt("Digite uma nota de 0 a 10:"));

let classificacao =
    (nota >= 9) ? "Excelente" :
    (nota >= 7) ? "Bom" :
    (nota >= 5) ? "Regular" :
    "Insuficiente";

alert("Classificação: " + classificacao);
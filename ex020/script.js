let preco = parseFloat(prompt("Digite o preço do produto:"));

let classificacao =
    (preco < 20) ? "Barato" :
    (preco <= 100) ? "Médio" :
    "Caro";

alert("Classificação: " + classificacao);
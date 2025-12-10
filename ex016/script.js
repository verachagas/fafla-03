let idade = parseInt(prompt("Digite sua idade:"));

let maiorBrasil = (idade >= 18) ? "Maior de idade no Brasil" : "Menor de idade no Brasil";
let maiorEUA = (idade >= 21) ? "Maior de idade nos EUA" : "Menor de idade nos EUA";

alert(maiorBrasil + "\n" + maiorEUA);
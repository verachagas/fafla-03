let valor = parseFloat(prompt("Digite o valor total da compra:"));
let codigo = prompt("Digite o código de desconto:");


let valorFinal = (codigo === "DESC10") ? (valor * 0.90) : valor;

alert("Valor final da compra: R$ " + valorFinal.toFixed(2));
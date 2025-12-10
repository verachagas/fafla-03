
function classificarNumeroComAlerts() {
    
    const entrada = prompt("Digite um número:");
    const numero = parseFloat(entrada);

    
    if (isNaN(numero)) {
        alert("Entrada inválida. Por favor, digite um valor numérico.");
        return; 
    }

  
    const mensagem = 
        numero > 0 ? "O número é Positivo." : 
        numero < 0 ? "O número é Negativo." : 
        "O número é Zero.";
    
   
    alert(mensagem);
}

classificarNumeroComAlerts();
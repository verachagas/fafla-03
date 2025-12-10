//let primeiraPessoa = 25
//let segundaPessoa = 26

//if (primeiraPessoa > segundaPessoa){
//    alert ("Primeira Pessoa é mais velha!")
//} else if(segundaPessoa >primeiraPessoa){
//alert("Segunda pessoa é mais velha!")
//}else{
//    alert("As duas pessoas tem a mesma idade!")
//}

ex 4 :
const IdadePrimeiraPessoa = parseInt (prompt("Digite sua idade:"))
const IdadeSegundaPessoa = parseInt(prompt("Digite sua idade:"))

const comparaIdade = IdadePrimeiraPessoa > IdadeSegundaPessoa ? "Primeira Pessoa é mais velha!" 
? IdadePrimeiraPessoa === IdadeSegundaPessoa 
: "Mesma idade" :
 "Segunda pessoa é mais velha!"

 alert(comparaIdade)

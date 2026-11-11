//----Funcao com parametro (Assinatura da funcao)----

// function nomeDaFuncao(parametro1, parametro2){
//     bloco de execução
//     return valorFinal
// }

// let variavel = nomeDafuncao(1, 2)

function soma(valor1, valor2){
   let totalSoma = valor1 + valor2;
   return totalSoma
}
function subtracao(valor1, valor2){
   let totalSubtracao = valor1 - valor2;
   return totalSubtracao
}
function multiplicacao(valor1, valor2){
   let totalMultiplicacao = valor1 * valor2;
   return totalMultiplicacao
}
function divisao(valor1, valor2){
   let totalDivisao = valor1 / valor2;
   return totalDivisao
}

alert("Calculadora de dois números 📐 ");

function calculadora(){
alert("Digite o tipo de Operação a seguir ➡")
let conta = Number(prompt("1-Soma  2-Subtração  3-Multiplicação  4-Divisão"));


if (conta == 1 || conta == 2 || conta == 3 || conta == 4) {
    let numero1 = Number(prompt("Qual o primeiro valor?"));
    let numero2 = Number(prompt("Qual o segundo valor?"));
    if(isNaN(numero1) || isNaN(numero2)){
        alert("ATENÇÃO, digite só números")
        let continuar = confirm("Deseja continuar?")
        if(continuar == true){
            calculadora()
            return;
        }else{
            return alert("Então, até mais !!!")
        }
    }

    let valorFinal;

    switch (conta){
        case 1:
            valorFinal = soma(numero1, numero2)
            alert("O resultado da soma é: " + valorFinal)
            break;
        case 2:
            valorFinal = subtracao(numero1, numero2)
            alert("O resultado da subtração é: " + valorFinal)
            break;
        case 3:
            valorFinal = multiplicacao(numero1, numero2)
            alert("O resultado da multiplicação é: " + valorFinal)
            break;
        case 4:
            valorFinal = divisao(numero1, numero2)
            valorFinal = alert("O resultado da divisão é: " + valorFinal)
        break;
    }
}else{
    alert("Desculpe, não entendi :(")
    let continuar = confirm("Deseja tentar novamente?")
    if(continuar){
        calculadora()
    }else{
        return;
    }
}
}

calculadora()

let confirma = confirm("Deseja Continuar?")
if(confirma){
  window.location.reload()
}
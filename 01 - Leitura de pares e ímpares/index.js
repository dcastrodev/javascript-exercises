// Consiste em ler um conjunto de números inteiros e contar a quantidade de números pares e ímpares. A leitura deve ser realizada até que seja lido o valor zero

function soNumero(numLocal){
    while(numLocal < 0 || isNaN(numLocal)){
        alert("Digite um valor válido");
        numLocal= parseInt(window.prompt('Informe um número: '));
    }

    return numLocal;
}

function main(){
  var par = 0;
  var impar = 0;
  var confirmUsuario = true;
  var estadoNumero;
  window.alert(
    "Saiba a quantidade de pares e ímpares existentes em um conjunto de números 🔢"
  );

  while(confirmUsuario) {
    let num = parseInt(window.prompt('Informe um número: '));
    num = soNumero(num);
      if (num % 2 == 0) {
        par++;
        estadoNumero = 'par';
      } else {
        impar++;
        estadoNumero = 'impar';
      }
    console.log(`O número ${num} é ${estadoNumero}`);
    confirmUsuario = window.confirm('Se quiser: \n-------------\n-Inserir mais números clique em (OK)\n-Sair e ver os resultados clique em (Cancelar)');
    }
    window.alert(`A quantidade de números pares é:  ${par} \nA quantidade de números ímpares é:  ${impar}`);
    window.alert('Para mais detalhes dos números inseridos "abra o console"');
    console.log(`------------------------------`);
    console.log(`A quantidade de números pares é: ${par} \nA quantidade de números ímpares é: ${impar}`);
}

main();

function contarPiada() {
  alert("Qual piada deseja escutar? 🤣");
  let piada = Number(window.prompt("1-Lago 2-Caminhão 3-Refri 4-Policial"));

  switch (piada) {
    case 1:
      alert(
        "Qual é a diferença entre o 'lago' e a 'padaria'? \n\n🐸No lago há sapinhos e na padaria assa pão.",
      );
      break;
    case 2:
      alert(
        "Tinha dois caminhões voando. Um deles caiu. Por que o outro continuou voando? \n\n🚚Porque era caminhão-pipa.",
      );
      break;
    case 3:
      alert(
        "Por que a coca-cola e a Fanta se dão muito bem? \n\n🥤Porque se a Fanta quebra, a coca, cola!",
      );
      break;
    case 4:
      alert(
        "Por que o policial não usa sabão? \n\n👮‍♂️Porque ele prefere deter gente.",
      );
      break;
    default:
      alert("Desculpe não entendi! tente novamente.");
      contarPiada();
  }
}


//Multicase (Multicaso)

let avaliarPiada = () => {
  alert("Avalie a piada vista ⭐⭐⭐");
  let avaliacao = Number(prompt("(1-2)-Ruim  (3-4)-Mediano 5-Excelente"));

  switch (avaliacao) {
    case 1:
    case 2:
      alert(
        `Que pena que a nota foi ${avaliacao}. \n\n Tente outra na próxima!😬`,
      );
      break;
    case 3:
    case 4:
      alert(`Nota ${avaliacao}. \n\n Essa até que tirou um sorriso, vai... 😁`);
      break;
    case 5:
      alert(`Nota ${avaliacao}. \n\n Excelente! Aplausos da plateia 🤪👏`);
      break;
    default:
      if (confirm("Erro! Deseja tentar Novamente?")) {
        avaliarPiada();
      }
  }
};

contarPiada();
avaliarPiada();
let confirma = confirm("Deseja Continuar?")
if(confirma){
  window.location.reload()
}
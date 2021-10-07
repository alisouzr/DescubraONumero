var numeroSecreto = parseInt(Math.random() * 11);
var maiorOuMenor;
var tentativa = 3;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var valorPensado = parseInt(document.getElementById("valor").value);
  if (tentativa > 0) {
    if (valorPensado < 0 || valorPensado > 10) {
      resultado.innerHTML = "Por favor, digite um número entre 0 e 10";
    } else if (valorPensado == numeroSecreto) {
      resultado.innerHTML = "PARABÉNSS VOCÊ ACERTOU!";
      tentativa = 0;
    } else {
      tentativa--;
      if (tentativa === 0) {
        resultado.innerHTML =
          "ERRADOO!<br>acabou as tentativas<br>O número secreto era " +
          numeroSecreto;
      } else {
        if (valorPensado > numeroSecreto) {
          maiorOuMenor = "menor";
        } else {
          maiorOuMenor = "maior";
        }
        resultado.innerHTML =
          "Você errou! <br>O número secreto é " +
          maiorOuMenor +
          "!<br>" +
          "faltam só " +
          tentativa +
          " tentativas";
      }
    }
  }
}

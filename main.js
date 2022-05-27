let numeroSecreto = parseInt(Math.random() * 11);
let maiorOuMenor;
let tentativa = 3;
const chutar = document.querySelector(".chutar");
const refresh = document.querySelector(".refresh");

chutar.addEventListener("click", () => {
    const valorPensado = parseInt(document.getElementById("valor").value);
    if (tentativa > 0) {
        if (valorPensado < 0 || valorPensado > 10) {
            resultado.innerHTML = "Por favor, digite um número entre 0 e 10";
        } else if (valorPensado == numeroSecreto) {
            resultado.innerHTML = "PARABÉNSS VOCÊ ACERTOU!";
            tentativa = 0;
            refresh.style.display = 'block';
            chutar.style.display = 'none';
        } else {
            tentativa--;
            if (tentativa === 0) {
                resultado.innerHTML =
                    "ERRADOO!<br>acabou as tentativas<br>O número secreto era " +
                    numeroSecreto;
                refresh.style.display = 'block';
                chutar.style.display = 'none';
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
})

refresh.addEventListener("click", () => {
    location.reload()
})
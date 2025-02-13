// Variáveis globais
let numeroSorteado = Math.floor(Math.random() * 100) + 1; // Número aleatório entre 1 e 100
let tentativas = 0;

// Função para verificar a tentativa do usuário
function verificar() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultDiv = document.getElementById("result");

    if (isNaN(numero) || numero < 1 || numero > 100) {
        resultDiv.innerHTML = "Por favor, insira um número válido entre 1 e 100.";
        return;
    }

    tentativas++;
    if (numero < numeroSorteado) {
        resultDiv.innerHTML = "O número é maior. Tente novamente!";
    } else if (numero > numeroSorteado) {
        resultDiv.innerHTML = "O número é menor. Tente novamente!";
    } else {
        resultDiv.innerHTML = `Parabéns! Você acertou o número ${numeroSorteado} em ${tentativas} tentativas!`;
        document.getElementById("back-button").style.display = "block"; // Exibe o botão de voltar
    }
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    numeroSorteado = Math.floor(Math.random() * 100) + 1; // Sorteia um novo número
    tentativas = 0;
    document.getElementById("result").innerHTML = "";
    document.getElementById("numero").value = "";
    document.getElementById("back-button").style.display = "none"; // Esconde o botão de voltar
}

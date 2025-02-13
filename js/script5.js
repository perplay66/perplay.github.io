// Define as perguntas, opções e a resposta correta (representada pelo índice da opção)
const questions = [
    {
        question: "Qual é a capital do Brasil?", // Pergunta
        options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"], // Opções de resposta
        answer: 2 // Índice da resposta correta (no caso, Brasília)
    },
    {
        question: "Qual é o maior planeta do nosso sistema solar?", // Pergunta
        options: ["Terra", "Júpiter", "Marte", "Saturno"], // Opções de resposta
        answer: 1 // Índice da resposta correta (Júpiter)
    },
    {
        question: "Em que ano ocorreu a independência do Brasil?", // Pergunta
        options: ["1822", "1889", "1500", "1900"], // Opções de resposta
        answer: 0 // Índice da resposta correta (1822)
    },
    {
        question: "Quem pintou a Mona Lisa?", // Pergunta
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"], // Opções de resposta
        answer: 1 // Índice da resposta correta (Leonardo da Vinci)
    },
    {
        question: "Qual é o elemento químico representado pelo símbolo 'O'?", // Pergunta
        options: ["Ouro", "Osmium", "Oxigênio", "Ósmio"], // Opções de resposta
        answer: 2 // Índice da resposta correta (Oxigênio)
    }
];

// Variáveis para controlar a questão atual e a pontuação
let currentQuestionIndex = 0; // Índice da pergunta atual
let score = 0; // Pontuação do usuário

// Função para carregar a pergunta e as opções de resposta
function loadQuestion() {
    // Obtém a pergunta atual com base no índice
    const currentQuestion = questions[currentQuestionIndex];
    
    // Atualiza o texto da pergunta na página
    document.getElementById('question').innerText = currentQuestion.question;
    
    // Atualiza as opções de resposta na página
    currentQuestion.options.forEach((option, index) => {
        document.getElementById(`option${index}`).innerText = option;
    });
}

// Função chamada quando o usuário clica para ir para a próxima pergunta
function nextQuestion() {
    // Obtém a opção selecionada pelo usuário
    const selectedOption = document.querySelector('input[name="option"]:checked');
    
    // Verifica se o usuário selecionou uma opção
    if (selectedOption) {
        // Converte o valor da opção selecionada para um número inteiro
        const answer = parseInt(selectedOption.value);
        
        // Verifica se a resposta está correta
        if (answer === questions[currentQuestionIndex].answer) {
            score++; // Aumenta a pontuação se a resposta estiver correta
        }
        
        // Avança para a próxima pergunta
        currentQuestionIndex++;
        
        // Verifica se há mais perguntas
        if (currentQuestionIndex < questions.length) {
            loadQuestion(); // Carrega a próxima pergunta
        } else {
            showScore(); // Exibe a pontuação final quando o quiz terminar
        }
    } else {
        // Se nenhuma opção foi selecionada, exibe um alerta
        alert("Por favor, selecione uma opção.");
    }
}

// Função para exibir a pontuação final
function showScore() {
    // Esconde a área de perguntas
    document.getElementById('question-container').style.display = 'none';
    
    // Exibe a área de pontuação
    document.getElementById('score-container').style.display = 'block';
    
    // Exibe a pontuação final do usuário
    document.getElementById('score').innerText = score;
}

// Carrega a primeira pergunta ao iniciar o quiz
loadQuestion();

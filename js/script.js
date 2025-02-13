// Seleciona todos os elementos com a classe 'btn'
const buttons = document.querySelectorAll('.btn');

// Seleciona o elemento com a classe 'screen'
const screen = document.querySelector('.screen');

// Inicializa a variável 'screenValue' como uma string vazia
let screenValue = '';

// Adiciona um evento de clique a cada botão
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Obtém o valor do atributo 'data-value' do botão clicado
        const value = button.getAttribute('data-value');
        
        // Verifica se o valor é 'C' (clear)
        if (value === 'C') {
            // Limpa o valor da tela
            screenValue = '';
            screen.value = screenValue;
        } else if (value === '=') {
            // Verifica se o valor é '=' (igual)
            try {
                // Avalia a expressão matemática em 'screenValue' e atualiza a tela com o resultado
                screenValue = eval(screenValue);
                screen.value = screenValue;
            } catch {
                // Em caso de erro na avaliação da expressão, exibe 'Erro' na tela
                screen.value = 'Erro';
            }
        } else {
            // Para outros valores, adiciona o valor do botão clicado ao 'screenValue' e atualiza a tela
            screenValue += value;
            screen.value = screenValue;
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (validateForm(name, email, message)) {
            alert('Formulário enviado com sucesso!');
            form.reset();
        }
    });

    function validateForm(name, email, message) {
        if (name.trim() === '') {
            alert('Por favor, insira seu nome.');
            return false;
        }
        if (email.trim() === '') {
            alert('Por favor, insira um endereço de e-mail válido.');
            return false;
        }
        if (message.trim() === '') {
            alert('Por favor, insira uma mensagem.');
            return false;
        }
        return true;
    }
});

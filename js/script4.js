function calcularIMC() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    if (peso > 0 && altura > 0) {
        const imc = peso / (altura * altura);
        let classificacao;
        
        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = 'Normal';
        } else if (imc >= 25 && imc < 29.9) {
            classificacao = 'Sobrepeso';
        } else {
            classificacao = 'Obesidade';
        }
        
        const resultado = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
        document.getElementById('resultado').innerText = resultado;
    } else {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos para peso e altura.';
    }
}

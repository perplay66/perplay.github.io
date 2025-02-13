function convert() {
    const value = document.getElementById('value').value;
    const conversionType = document.getElementById('conversion').value;
    let result;

    switch (conversionType) {
        case 'c-to-f':
            result = (value * 9/5) + 32;
            break;
        case 'm-to-cm':
            result = value * 100;
            break;
        case 'kg-to-lb':
            result = value * 2.20462;
            break;
        default:
            result = 'Tipo de conversão inválido';
            break;
    }

    document.getElementById('result').innerText = result;
}

function ex02() {
    var numero = parseFloat(prompt("Digite um número"));

    if (isNaN(numero)) {
        alert("Por favor, digite um número válido.");
        return;
    }

    if (numero === 0) {
        alert("O número é zero");
    } else if (numero > 0) {
        alert("O número é positivo");
    } else {
        alert("O número é negativo");
    }
}
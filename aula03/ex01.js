function ex01() {
    var n = prompt("Digite um número");

    if (isNaN(n)) {
        alert("Por favor, digite um número válido.");
        return;
    }

    if (n % 2 === 0) {
        alert("Par");
    } else {
        alert("Ímpar");
    }
}
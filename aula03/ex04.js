function ex04() {
    let numero = parseInt(prompt("Digite um número:"));

    // Função para verificar se o número é primo
    function ehPrimo(numero) {
        if (numero < 2) return false;
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) return false;
        }
        return true;
    }

    alert(numero + (ehPrimo(numero) ? " é primo." : " não é primo."));
}
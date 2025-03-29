function ex03() {
    let numero = prompt("Digite um número inteiro positivo:");

    if (isNaN(numero) || numero < 1) {
        alert("Por favor, digite um número inteiro positivo válido.");
        return;
    }

    let soma = 0;
    for (let i = 1; i <= numero; i++) {
        soma += i;
    }

    alert("A soma dos números de 1 até " + numero + " é: " + soma);
}
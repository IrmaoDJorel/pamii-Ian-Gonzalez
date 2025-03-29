function ex06() {
    let palavra = prompt("Digite uma palavra:");
    
    // Função para inverter a string
    function inverterString(str) {
        return str.split('').reverse().join('');
    }

    if (palavra) {
        alert("A palavra invertida é: " + inverterString(palavra));
    } else {
        alert("Entrada inválida. Digite uma palavra válida.");
    }
}
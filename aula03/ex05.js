function ex05() {
    let palavra = prompt("Digite uma palavra:");
    let letra = prompt("Digite a letra que deseja contar:");

    // Verificar se a palavra e a letra são válidas
    if (palavra && letra && letra.length === 1) {
        let contador = 0;
        // Contar as ocorrências da letra na palavra
        for (let char of palavra) {
            if (char === letra) contador++;
        }
        alert(`A letra '${letra}' aparece ${contador} vezes na palavra '${palavra}'.`);
    } else {
        alert("Entrada inválida. Certifique-se de inserir uma palavra e apenas uma letra.");
    }
}
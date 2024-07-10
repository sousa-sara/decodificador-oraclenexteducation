// Função para criptografar o texto
function encrypt(text) {
    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encryptedText;
}

// Função para descriptografar o texto
function decrypt(text) {
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return decryptedText;
}

// Função para copiar o texto para a área de transferência
function copyToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}

// Adiciona eventos aos botões
document.getElementById("btn-crypt").addEventListener("click", function() {
    const inputText = document.getElementById("input-text").value;
    const result = encrypt(inputText);
    document.getElementById("result").textContent = result;
});

document.getElementById("btn-decrypt").addEventListener("click", function() {
    const inputText = document.getElementById("input-text").value;
    const result = decrypt(inputText);
    document.getElementById("result").textContent = result;
});

document.getElementById("btn-copy").addEventListener("click", function() {
    const resultText = document.getElementById("result").textContent;
    copyToClipboard(resultText);
    alert("Texto copiado para a área de transferência!");
});

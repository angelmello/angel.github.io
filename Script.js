// Alterna a visibilidade da mensagem ao clicar no botão
document.getElementById('meuBotao').addEventListener('click', function() {
    var mensagem = document.getElementById('mensagem');
    mensagem.classList.toggle('hidden');
});

// Envia a mensagem do campo de texto
document.getElementById('sendMessage').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const messageDisplay = document.getElementById('messageDisplay');
    const message = messageInput.value;

    if (message.trim() !== "") {
        messageDisplay.textContent = message;
        messageInput.value = "";
    } else {
        alert("Por favor, digite uma mensagem antes de enviar.");
    }
});

// Exibe/Esconde texto ao clicar na foto
document.getElementById("minhaFoto").addEventListener("click", function() {
    var sobreMim = document.getElementById("sobreMim");
    sobreMim.style.display = (sobreMim.style.display === "none") ? "block" : "none";
});

// Move o bloco com as setas do teclado
document.addEventListener('keydown', function(event) {
    const bloco = document.getElementById('bloco');
    const style = getComputedStyle(bloco);
    let top = parseInt(style.top) || 0;
    let left = parseInt(style.left) || 0;

    switch (event.key) {
        case 'ArrowUp':
            bloco.style.top = (top - 10) + 'px';
            break;
        case 'ArrowDown':
            bloco.style.top = (top + 10) + 'px';
            break;
        case 'ArrowLeft':
            bloco.style.left = (left - 10) + 'px';
            break;
        case 'ArrowRight':
            bloco.style.left = (left + 10) + 'px';
            break;
    }
});

// Adiciona nova habilidade à lista
document.getElementById('btn-adicionar').addEventListener('click', function() {
    const novaHabilidade = prompt('Digite uma nova habilidade:');
    if (novaHabilidade) {
        const listaHabilidades = document.getElementById('lista-habilidades');
        const novoItem = document.createElement('li');
        novoItem.textContent = novaHabilidade;
        novoItem.className = 'habilidade';
        listaHabilidades.appendChild(novoItem);

        // Adicionando animação aos itens adicionados
        novoItem.addEventListener('mouseover', function() {
            novoItem.style.transform = 'scale(1.1)';
        });
        novoItem.addEventListener('mouseout', function() {
            novoItem.style.transform = 'scale(1)';
        });
    }
});

// Redireciona para outra página ao clicar no botão
document.getElementById('meuBotao').addEventListener('click', function() {
    window.location.href = 'http://example.com/nova-pagina.html'; // Insira a URL de destino aqui
});

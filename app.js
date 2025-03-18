// Array que armazena os nomes dos amigos
let listaDeAmigos = ['João', 'Maria', 'Carlos', 'Ana'];

// Função para adicionar um nome à lista de amigos
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    const campoDeEntrada = document.getElementById('nomeAmigo');
    const nomeAmigo = campoDeEntrada.value.trim(); // Remove espaços desnecessários

    // Valida a entrada
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return; // Interrompe a execução da função
    }

    // Atualiza o array de amigos
    listaDeAmigos.push(nomeAmigo);

    // Limpa o campo de entrada
    campoDeEntrada.value = '';

    // Opcional: Exibe a lista de amigos no console
    console.log('Lista de amigos atualizada:', listaDeAmigos);
}

// Função para atualizar a lista de amigos na interface HTML
function exibirAmigos() {
    // Captura o elemento da lista HTML
    const listaHTML = document.getElementById('listaAmigos');

    // Limpa a lista antes de adicionar novos elementos
    listaHTML.innerHTML = '';

    // Adiciona cada nome como um elemento <li> dentro da lista
    listaDeAmigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaHTML.appendChild(li);
    });
}
    // Opcional: Apenas para fins de depuração
    console.log('Lista de amigos exibida na página:', listaDeAmigos);
}

// Função para sortear um amigo aleatório
function sortearAmigo() {
    // Valida se há amigos disponíveis no array
    if (listaDeAmigos.length === 0) {
        alert('A lista de amigos está vazia. Adicione nomes antes de sortear.');
        return; // Interrompe a execução se o array estiver vazio
    }

    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

    // Obtém o nome sorteado
    const amigoSorteado = listaDeAmigos[indiceAleatorio];

    // Exibe o resultado na página
    const elementoResultado = document.getElementById('resultadoAmigo');
    elementoResultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}

// Função para adicionar amigos à lista
function adicionarAmigo() {
    let amigo = document.getElementById('amigo');
    let lista = document.getElementById('listaAmigos');

    // Verifica se o campo não está vazio
    if (amigo.value.trim() === "") {
        alert("Por favor, digite um nome.");
        return;
    }

    // Cria um novo item de lista (li) e adiciona o nome
    let novoItem = document.createElement('li');
    novoItem.textContent = amigo.value;

    // Adiciona o novo item à lista
    lista.appendChild(novoItem);

    // Limpa o campo de entrada
    amigo.value = "";
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    let listaAmigos = document.getElementById('listaAmigos');
    let resultado = document.getElementById('resultado');

    // Verifica se há pelo menos dois amigos na lista
    if (listaAmigos.children.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear!");
        return;
    }

    // Limpa o resultado anterior
    resultado.innerHTML = "";

    // Converte a lista de amigos para um array
    let amigos = Array.from(listaAmigos.children).map(li => li.textContent);

    // Sorteia um nome aleatório da lista
    let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibe o resultado
    let novoItem = document.createElement('li');
    novoItem.textContent = amigoSecreto;
    resultado.appendChild(novoItem);
}
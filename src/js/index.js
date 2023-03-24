// Objetivo - Quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

// passo 1 - dar um jeito de pegar o elemento html dos botoes
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// passo 2 - dar uma jeito de identificar o clique do usuário no botão (evento)
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desativarBotaoSelecionado();

        marcarBotaoComoSelecionado(botao);

        esconderImagemAnterior();
        
        aparecerImagemReferenteAoBotao(indice);

    })
})
function aparecerImagemReferenteAoBotao(indice) {
    imagens[indice].classList.add('ativa');
}

function esconderImagemAnterior() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function marcarBotaoComoSelecionado(botao) {
    botao.classList.add('selecionado');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}


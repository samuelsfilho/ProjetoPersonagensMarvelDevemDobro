/*
OBJETIVO 1 - quando passar o mouse em cima do personagem temos que:

-colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele

- retirar a classe selecionado do personagem que esta selecionado

OBJETIVO 2 - quando passar o mouse em cima do personagem,trocar a imagem e nome do personagem grande
- alterar a imagem do personagem jogador 1
- alterar o nome do jogador 1

*/

//console.log('document')

const personagens =document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')
        personagem.classList.add('selecionado')
    })
})
const inputsTexto = document.querySelectorAll('.texto')
const formOpcoes = document.querySelectorAll('.form-opcoes')

const opcoes = ['Sim', 'Não']

for (let index = 0; index < inputsTexto.length; index++) {

    inputsTexto[index].addEventListener('keyup', () => {

        inputsTexto[index].value = ''
    })

    inputsTexto[index].addEventListener('focus', () => {

        const pSim = document.createElement('p')
        pSim.textContent = opcoes[0]
        pSim.classList.add('form-opcao')

        const pNao = document.createElement('p')
        pNao.textContent = opcoes[1]
        pNao.classList.add('form-opcao')

        formOpcoes[index].textContent = ''
        formOpcoes[index].appendChild(pSim)
        formOpcoes[index].appendChild(pNao)
        formOpcoes[index].classList.toggle('hidden')
    })

    inputsTexto[index].addEventListener('focusout', () => {

        formOpcoes[index].classList.toggle('hidden')
    })
}
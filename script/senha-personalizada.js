import { letras, caracteresEspeciais, copiarSenha } from "./script.js"
export function senhaPersonalizada() {
    window.addEventListener('DOMContentLoaded', () => {
        const paragrafoSenha = document.querySelector('.js-paragrafo-senha-personalizada')
        const range = document.querySelector('.js-range')
        const formSenha = document.querySelector('.js-form-senha-personalizada')
        const btnGerarSenha = document.querySelector('.js-gerar-senha-personalizada')
        const conteudosSenha = document.querySelectorAll('.js-checkbox')
        const paragrafoTamanhoSenha = document.querySelector('.js-tamanho-senha');
        const btnCopiarSenha = document.querySelector('.js-copiar-senha-personalizada')
        const sectionSenhaPadrao = document.querySelector('.section-senha-personalizada')
        let tamanhoEscolhido;
        formSenha.addEventListener('change', () => {
            tamanhoEscolhido = range.value;
            paragrafoTamanhoSenha.textContent = tamanhoEscolhido
        })

        btnGerarSenha.addEventListener('click', () => {
            let caracteresEscolhidos = []
            sectionSenhaPadrao.classList.remove('none')
            paragrafoSenha.textContent = ''
            conteudosSenha.forEach((e) => {
                if (e.checked && caracteresEscolhidos.indexOf(e.value) == -1) {
                    caracteresEscolhidos.push(e.value)
                }
            })
            if(caracteresEscolhidos.length <= 0) {
                paragrafoSenha.classList.add('escolher-opcao')
                paragrafoSenha.textContent = 'Escolha pelo menos um tipo de caracter!'
                btnCopiarSenha.classList.add('none')
            }

            else {
                btnCopiarSenha.classList.remove('none')
                let senhaFinal = ''
                let tamanhoParagrafo = paragrafoSenha.textContent.length
                btnCopiarSenha.value = 'Copiar Senha'
                paragrafoSenha.classList.remove('escolher-opcao')
                while (tamanhoParagrafo != tamanhoEscolhido) {
                    let selecaoAleatoria = Math.ceil(Math.random() * 3)
                    let selecaoAleatoria2 = Math.ceil(Math.random() * 3)
                    if (senhaFinal.length < tamanhoEscolhido && caracteresEscolhidos.indexOf('letras') != -1 && (selecaoAleatoria === 1 || selecaoAleatoria2 === 1)) {
                        senhaFinal += letras.charAt(Math.ceil(Math.random() * letras.length - 1))
                    }

                    if (senhaFinal.length < tamanhoEscolhido && caracteresEscolhidos.indexOf('numeros') != -1 && (selecaoAleatoria === 2 || selecaoAleatoria2 === 2)) {
                        senhaFinal += Math.ceil(Math.random() * 9)
                    }

                    if (senhaFinal.length < tamanhoEscolhido && 
                        caracteresEscolhidos.indexOf('Caracteres Especiais') != -1 && 
                        (selecaoAleatoria === 3 || selecaoAleatoria2 === 3)) {
                        senhaFinal += caracteresEspeciais.charAt(Math.ceil(Math.random() * caracteresEspeciais.length - 1))
                    }

                    if (senhaFinal.length >= tamanhoEscolhido) {
                        tamanhoParagrafo = tamanhoEscolhido
                    }
                }

                paragrafoSenha.textContent = senhaFinal
                if(paragrafoSenha.textContent != 'Escolha pelo menos um tipo de caracter!') {
                    btnCopiarSenha.addEventListener('click',function() {
                        copiarSenha(paragrafoSenha.textContent, btnCopiarSenha)
                    })
                }
            }
        })
    })
}
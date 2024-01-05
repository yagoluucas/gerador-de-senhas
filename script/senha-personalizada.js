import {letras, caracteresEspeciais} from "./script.js"
export function senhaPersonalizada() {
    window.addEventListener('DOMContentLoaded', () => {
        const paragrafoSenha = document.querySelector('.js-paragrafo-senha-personalizada')
        const range = document.querySelector('.js-range')
        const formSenha = document.querySelector('.js-form-senha-personalizada')
        const btnGerarSenha = document.querySelector('.js-gerar-senha-personalizada')
        const conteudosSenha = document.querySelectorAll('.js-checkbox')
        formSenha.addEventListener('change', () => {
            let tamanhoEscolhido = range.value;
            let conteduoEscolhido = [];
            paragrafoSenha
            btnGerarSenha.addEventListener('click', () => {
                paragrafoSenha.textContent = ''
                let tamanhoParagrafo = paragrafoSenha.textContent.length
                let senhaFinal = ''
                while(tamanhoParagrafo != tamanhoEscolhido) {
                    if(senhaFinal.length < tamanhoEscolhido) {
                        senhaFinal += letras.charAt(Math.ceil(Math.random() * letras.length - 1))
                    } else{
                        tamanhoParagrafo = tamanhoEscolhido
                    }
                    if(senhaFinal.length < tamanhoEscolhido) {
                        senhaFinal += Math.ceil(Math.random() * 9)
                    } else {
                        tamanhoParagrafo = tamanhoEscolhido
                    }
                }

                paragrafoSenha.textContent = senhaFinal
            })

        })
    })
}
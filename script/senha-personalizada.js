export function senhaPersonalizada() {
    window.addEventListener('DOMContentLoaded', () => {
        const paragrafoSenha = document.querySelector('.js-paragrafo-senha-personalizada')
        const range = document.querySelector('.js-range')
        const formSenha = document.querySelector('.js-form-senha-personalizada')
        const btnGerarSenha = document.querySelector('.js-gerar-senha-personalizada')
        formSenha.addEventListener('change', () => {
            let tamanhoEscolhido = range.value
            paragrafoSenha
            btnGerarSenha.addEventListener('click', () => {
                let tamanhoSenha = paragrafoSenha.textContent
                paragrafoSenha.textContent = ''
                tamanhoSenha = ''
                console.log(paragrafoSenha.textContent)
                while(tamanhoSenha.length < tamanhoEscolhido) {
                    tamanhoSenha += Math.ceil(Math.random() * 9);
                    tamanhoSenha += 
                }
                paragrafoSenha.textContent = tamanhoSenha
            })

        })
    })
}
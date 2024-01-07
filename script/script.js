import { senhaPadrao } from "./senha-padrao.js"
import { senhaPersonalizada } from "./senha-personalizada.js";
senhaPadrao();
senhaPersonalizada();

export const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
export const caracteresEspeciais = "!@#$%&*£"

export function copiarSenha() {
    const paragrafoSenha = document.querySelectorAll('.js-paragrafo-senha')
    let senhaFeita;
    paragrafoSenha.forEach((p) => {
        if(p.classList.contains('js-paragrafo-senha-personalizada')) {
            senhaFeita = p.textContent
        } else {
            senhaFeita = p.textContent
        }
    })
    const inputCriado = document.createElement('input')
    inputCriado.classList.add('inputCriado')
    document.body.appendChild(inputCriado)
    inputCriado.value = senhaFeita
    let inputSelecionado = document.querySelector('.inputCriado')
    inputSelecionado.select()
    document.execCommand("copy")
    document.body.removeChild(inputCriado)
    // alert("Senha Copiada")
}

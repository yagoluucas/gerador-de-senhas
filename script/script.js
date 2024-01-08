import { senhaPadrao } from "./senha-padrao.js"
import { senhaPersonalizada } from "./senha-personalizada.js";
senhaPadrao();
senhaPersonalizada();

export const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
export const caracteresEspeciais = "!@#$%&*£"
export function copiarSenha(senha,btn) {
    const inputCriado = document.createElement('input')
    inputCriado.classList.add('inputCriado')
    document.body.appendChild(inputCriado)
    inputCriado.value = senha
    let inputSelecionado = document.querySelector('.inputCriado')
    inputSelecionado.select()
    document.execCommand("copy")
    document.body.removeChild(inputCriado)
    btn.value = 'Copiado!'
}

import { senhaPadrao } from "./senha-padrao.js"
import { senhaPersonalizada } from "./senha-personalizada.js";
const btn = document.querySelector('.js-btn-senha-padrao')
senhaPadrao();
senhaPersonalizada();

export const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
export const caracteresEspeciais = "!@#$%^&*()_+-={}[]:;< >.?"
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

export function numerosAleatorios() {
    let numerosAleatorios = [Math.ceil(Math.random() * 3), Math.ceil(Math.random() * 3)];
    return numerosAleatorios;
}
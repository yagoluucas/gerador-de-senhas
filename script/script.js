import {senhaPadrao} from "./senha-padrao.js"
import { senhaPersonalizada } from "./senha-personalizada.js";
senhaPadrao();
senhaPersonalizada();

export const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
export const caracteresEspeciais = "!@#$%&*£"

// export function copiarSenha(texto) {
//     const btnCopiarSenha = document.querySelectorAll('.js-btn-copiar-senha')
//     btnCopiarSenha.forEach((btn) => {
//         btn.addEventListener('click', () => {
//             let senha = texto.textContent;
//             senha.setSelectionRange(0, 99999)
//             document.execCommand('copy')
//         })
//     })
// }

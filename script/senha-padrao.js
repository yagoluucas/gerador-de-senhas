import {letras, caracteresEspeciais} from "./script.js";
export function senhaPadrao() {
    window.addEventListener('DOMContentLoaded', () => {
        const btnGerarSenha = document.querySelector('.js-btn-senha-padrao')
        const paragrafoSenha = document.querySelector('.js-paragrafo-senha')
        const select = document.querySelector('.js-opcoes')
    
        function senhaFraca() {
            let senha = (Math.random() * 9).toFixed();
            for(let i = 0; i < 3; i++) {
                let letra = letras.charAt(Math.ceil(Math.random() * 26))
                let numeroAleatorio = (Math.random() * 9).toFixed();
                senha += numeroAleatorio;
                senha += letra;
            }
            return senha;
        }
    
        function senhaMedia() {
            let senha = letras.charAt(Math.floor(Math.random() * 26));
            for(let i = 0; i < 2; i++) {
                let numeroAleatorio = (Math.random() * 9).toFixed();
                let letraMinuscula = letras.charAt(Math.ceil(Math.random() * 26));
                let letraMaiuscula = letras.charAt(Math.ceil(Math.random() * (52 - 26)) + 26);
                senha += numeroAleatorio;
                senha += letraMinuscula;
                senha += letraMaiuscula;
            }
            return senha;
        }
    
        function senhaForte() {
            let senha = caracteresEspeciais.charAt(Math.ceil(Math.random() * caracteresEspeciais.length - 1));
            for(let i = 0; i < 4; i++) {
               let numeroAleatorio = Math.ceil(Math.random() * 9);
               let caracterEspecial = caracteresEspeciais.charAt(Math.ceil(Math.random() * caracteresEspeciais.length - 1));
               let letraMaiuscula = letras.charAt(Math.ceil(Math.random() * (52 - 26)) + 26);
               let letraMinuscula = letras.charAt(Math.ceil(Math.random() * 26));
               senha += numeroAleatorio;
               senha += letraMaiuscula;
               senha += caracterEspecial;
               senha += letraMinuscula;
            }
            return senha;
        }
    
        btnGerarSenha.addEventListener('click', () => {
            let opcaoEscolhida = select.value
            switch (opcaoEscolhida) {
                case "Simples":
                    paragrafoSenha.textContent = senhaFraca();
                    break;
                case "Media":
                    paragrafoSenha.textContent = senhaMedia();
                    break;
                case "Forte":
                    paragrafoSenha.textContent = senhaForte();
            }
        })
    })
}
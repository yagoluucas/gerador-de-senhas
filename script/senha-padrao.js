import {letras, caracteresEspeciais, copiarSenha, numerosAleatorios} from "./script.js";
export function senhaPadrao() {
    // colocar a função de gerar algo aleatorio
    window.addEventListener('DOMContentLoaded', () => {
        const btnGerarSenha = document.querySelector('.js-btn-senha-padrao')
        const paragrafoSenha = document.querySelector('.js-paragrafo-senha')
        const select = document.querySelector('.js-opcoes')
        const btnCopiarSenha = document.querySelector('.js-copiar-senha')
        const sectionSenhaPadrao = document.querySelector('.section-senha-padrao')
    
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
            let senha = '';
            while(true) {
                if (numerosAleatorios().indexOf(2) !== -1) {
                    senha += letras.charAt(Math.ceil(Math.random() * letras.length - 1));
                }
                if (numerosAleatorios().indexOf(1) !== -1) {
                    senha += Math.ceil(Math.random() * 9);
                }
                if (numerosAleatorios().indexOf(3) !== -1) {
                    senha += caracteresEspeciais.charAt(Math.ceil(Math.random() * caracteresEspeciais.length - 1));
                }
                if (senha.length > 15) {
                    break
                }
            }

            return senha;
        }
    
        btnGerarSenha.addEventListener('click', () => {
            let opcaoEscolhida = select.value
            btnCopiarSenha.value = 'Copiar Senha'
            sectionSenhaPadrao.classList.remove('none')
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

        btnCopiarSenha.addEventListener('click', function() {
            copiarSenha(paragrafoSenha.textContent, btnCopiarSenha)
        })
    })
}
import {letras, caracteresEspeciais, copiarSenha, numerosAleatorios} from "./script.js";
export function senhaPadrao() {
    window.addEventListener('DOMContentLoaded', () => {
        const btnGerarSenha = document.querySelector('.js-btn-senha-padrao')
        const paragrafoSenha = document.querySelector('.js-paragrafo-senha')
        const select = document.querySelector('.js-opcoes')
        const btnCopiarSenha = document.querySelector('.js-copiar-senha')
        const sectionSenhaPadrao = document.querySelector('.section-senha-padrao')
    
        function senhaFraca() {
            let senha = '';
            while(true) {
                if(senha.length > 5) {
                    return senha;
                } else {
                    if(numerosAleatorios().indexOf(1) !== -1) {
                        senha += letras.charAt(Math.ceil(Math.random() * 26))
                    }
                    if(numerosAleatorios().indexOf(2) !== -1) {
                        senha += (Math.random() * 9).toFixed();
                    }
                }
            }
        }
    
        function senhaMedia() {
            let senha = '';
            while(true) {
                if(senha.length > 8) {
                    return senha;
                } else {
                    if(numerosAleatorios().indexOf(2) !== -1) {
                        senha += letras.charAt(Math.ceil(Math.random() * (52 - 26)) + 26);
                    }
                    if(numerosAleatorios().indexOf(1) !== -1) {
                        senha += (Math.random() * 9).toFixed();
                    }

                    if(numerosAleatorios().indexOf(3) !== -1) {
                        senha += letras.charAt(Math.ceil(Math.random() * 26));
                    }
                }                
            }
        }
    
        function senhaForte() {
            let senha = '';
            while(true) {
                if (senha.length >= 12) {
                    return senha
                } else {
                    if (numerosAleatorios().indexOf(2) !== -1) {
                        senha += letras.charAt(Math.ceil(Math.random() * letras.length - 1));
                    }
                    if (numerosAleatorios().indexOf(1) !== -1) {
                        senha += Math.ceil(Math.random() * 9);
                    }
                    if (numerosAleatorios().indexOf(3) !== -1) {
                        senha += caracteresEspeciais.charAt(Math.ceil(Math.random() * caracteresEspeciais.length - 1));
                    }
                }           
            }
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
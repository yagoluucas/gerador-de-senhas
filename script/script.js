window.addEventListener('DOMContentLoaded', () => {
    const btnGerarSenha = document.querySelector('input[type=button]')
    const paragrafoSenha = document.querySelector('.js-paragrafo-senha')
    const select = document.querySelector('.js-opcoes')
    const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&"
    function senhaFraca() {
        let senha = (Math.random() * 10).toFixed();
        for(let i = 0; i < 2; i++) {
            let letra = letras.charAt(Math.floor(Math.random() * 26))
            let numeroAleatorio = (Math.random() * 20).toFixed();
            senha += numeroAleatorio;
            senha += letra;
        }
        return senha;
    }

    function senhaMedia() {
        let senha = letras.charAt(Math.floor(Math.random() * 26));
        for(let i = 0; i < 2; i++) {
            let letraMinuscula = letras.charAt(Math.floor(Math.random() * 26));
            let numeroAleatorio = (Math.random() * 20).toFixed();
            let letraMaiuscula = letras.charAt(Math.floor(Math.random() * (52 - 26)) + 26);
            senha += numeroAleatorio;
            senha += letraMinuscula;
            senha += letraMaiuscula;
        }

        return senha;
    }

    btnGerarSenha.addEventListener('click', () => {
        let opcaoEscolhida = select.value
        switch (opcaoEscolhida) {
            case "Fraca":
                paragrafoSenha.textContent = senhaFraca();
                break;
            case "Media":
                paragrafoSenha.textContent =  senhaMedia();
        }
    })
})
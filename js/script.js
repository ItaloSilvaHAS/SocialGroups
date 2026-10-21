
// animação da nav Abaixo !!
const element = document.querySelector('.lista');
element.classList.add('animate__animated', 'animate__fadeInDown');

// Troca dos botões por Perfil !!

const areaUsuario = document.getElementById("areaUsuario");

if(localStorage.getItem("usuarioLogado") === "true"){

    areaUsuario.innerHTML = `
        <button onclick="abrirPerfil()">
            Perfil
        </button>
    `;
}
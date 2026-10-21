
// animação da nav Abaixo !!
const element = document.querySelector('.lista');
element.classList.add('animate__animated', 'animate__fadeInDown');

// Troca dos botões por Perfil !!

function abrirPerfil() {
    window.location.href = "Pages/Perfil.html";
}

const areaUsuario = document.querySelector(".areaUsuario");

if (
    areaUsuario &&
    localStorage.getItem("usuarioLogado") === "true"
) {
    areaUsuario.innerHTML = `
        <button onclick="abrirPerfil()">
            Perfil
        </button>
    `;
}
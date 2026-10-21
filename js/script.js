
// animação da nav Abaixo abaixo!!
const element = document.querySelector('.lista');
element.classList.add('animate__animated', 'animate__fadeInDown');

// Troca dos botões por Perfil abaixo !!

function abrirPerfil() {
    window.location.href = "Pages/Perfil.html";
}

const areaUsuario = document.querySelector(".areaUsuario");

if (
    areaUsuario &&
    localStorage.getItem("usuarioLogado") === "true"
) {
    areaUsuario.innerHTML = `
        <button onclick="abrirPerfil()" class="Perfil">
            Perfil
        </button>
    `;
}

// Troca automatica dos slides abaixo!! 

let count = 1;

setInterval(() => {
    count++;

    if (count > 4) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}, 5000);
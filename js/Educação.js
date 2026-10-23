// animação da nav Abaixo abaixo!!
const element = document.querySelector('.lista');
element.classList.add('animate__animated', 'animate__fadeInDown');

// Troca dos botões por Perfil abaixo !!

function abrirPerfilOng() {
    window.location.href = "Pages\PerfilOng.html";
}

function abrirPerfilUser() {
    window.location.href = "Pages\PerfilUser.html";
}

const areaUsuario = document.querySelector(".areaUsuario");

if (
    areaUsuario &&
    localStorage.getItem("logado") === "user"
) {
    areaUsuario.innerHTML = `
        <button onclick="abrirPerfil()" class="PerfilOng">
            Perfil
        </button>
    `;
}else if( localStorage.getItem("logado") === "ong"){

     areaUsuario.innerHTML = `
        <button onclick="abrirPerfil()" class="PerfilUser">
            Perfil
        </button>
        `;
}
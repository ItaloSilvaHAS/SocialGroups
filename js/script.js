
// animação da nav Abaixo abaixo!!
const element = document.querySelector('.lista');
element.classList.add('animate__animated', 'animate__fadeInDown');

// Troca dos botões por Perfil abaixo !!

function abrirPerfilOng() {
    window.location.href = "./Pages/PerfilOng.html";
}

function abrirPerfilUser() {
    window.location.href = "./Pages/PerfilUser.html";
}

const areaUsuario = document.querySelector(".areaUsuario");

if (
    areaUsuario &&
    localStorage.getItem("logado") === "ong"
) {
    areaUsuario.innerHTML = `
        <button onclick="abrirPerfilOng()" class="PerfilOng">
            Perfil
        </button>
    `;
}else if( localStorage.getItem("logado") === "user"){

     areaUsuario.innerHTML = `
        <button onclick="abrirPerfilUser()" class="PerfilUser">
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
}, 10000);
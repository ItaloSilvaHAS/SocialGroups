
// animação da nav Abaixo abaixo!!
const element = document.querySelector('.lista');
element.classList.add('animate__animated', 'animate__fadeInDown');

// Troca dos botões por Perfil abaixo !!

function abrirPerfilOng() {
    window.location.href = "../Pages/PerfilOng.html";
}

function abrirPerfilUser() {
    window.location.href = "../Pages/PerfilUser.html";
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
}, 15000);

// Menu mobile!!

const menuBtn = document.getElementById("menuBtn");
const menuLista = document.getElementById("menuLista");

menuBtn.addEventListener("click", () => {
    menuLista.classList.toggle("ativo");
});

//add touch nos slides para mobile -Educação

const sliderEducacao = document.querySelector(".conteudo .slider");

let startX = 0;

sliderEducacao.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

sliderEducacao.addEventListener("touchend", (e) => {

    let endX = e.changedTouches[0].clientX;
    let distancia = endX - startX;

    if (distancia < -50) {
        // próxima imagem
        count++;

        if (count > 4) count = 1;

        document.getElementById("radio" + count).checked = true;
    }

    if (distancia > 50) {
        // imagem anterior
        count--;

        if (count < 1) count = 4;

        document.getElementById("radio" + count).checked = true;
    }

});

//add touch nos slides para mobile - Reciclagem

let countReciclagem = 5;

const sliderReciclagem = document.querySelector(".conteudo2 .slider");

let startX2 = 0;

sliderReciclagem.addEventListener("touchstart", (e) => {
    startX2 = e.touches[0].clientX;
});

sliderReciclagem.addEventListener("touchend", (e) => {

    let endX2 = e.changedTouches[0].clientX;
    let distancia2 = endX2 - startX2;

    if (distancia2 < -50) {

        countReciclagem++;

        if (countReciclagem > 8) {
            countReciclagem = 5;
        }

        document.getElementById(
            "radio" + countReciclagem
        ).checked = true;
    }

    if (distancia2 > 50) {

        countReciclagem--;

        if (countReciclagem < 5) {
            countReciclagem = 8;
        }

        document.getElementById(
            "radio" + countReciclagem
        ).checked = true;
    }

});
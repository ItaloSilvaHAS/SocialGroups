
// ANIMAÇÃO DA NAV


const listaAnimada = document.querySelector(".lista");

if (listaAnimada) {
    listaAnimada.classList.add(
        "animate__animated",
        "animate__fadeInDown"
    );
}


// PERFIL


function abrirPerfilOng() {
    window.location.href = "../Pages/PerfilOng.html";
}

function abrirPerfilUser() {
    window.location.href = "../Pages/PerfilUser.html";
}

const areaUsuario = document.querySelector(".areaUsuario");

if (areaUsuario) {

    if (localStorage.getItem("logado") === "user") {

        areaUsuario.innerHTML = `
            <button onclick="abrirPerfilUser()" class="PerfilUser">
                Perfil
            </button>
        `;

    } else if (localStorage.getItem("logado") === "ong") {

        areaUsuario.innerHTML = `
            <button onclick="abrirPerfilOng()" class="PerfilOng">
                Perfil
            </button>
        `;
    }
}


// MENU MOBILE


const menuBtn = document.getElementById("menuBtn");
const menuLista = document.getElementById("menuLista");

if (menuBtn && menuLista) {

    menuBtn.addEventListener("click", () => {
        menuLista.classList.toggle("ativo");
    });

}


// CARROSSEL DE NOTÍCIAS


const slides = document.querySelectorAll(".slide");

const noticias = [

    {
        titulo: "Titulo temporario!!",
        descricao: "descrição temporaria!!"
    },

    {
        titulo: "Titulo temporario!!",
        descricao: "descrição temporaria!!"
    },

    {
        titulo: "Titulo temporario!!",
        descricao: "descrição temporaria!!"
    },

    {
        titulo: "Titulo temporario!!",
        descricao: "descrição temporaria!!"
    }

];

const titulo = document.getElementById("tituloNoticia");
const descricao = document.getElementById("descricaoNoticia");

let indice = 0;

// Verificação de segurança
if (
    slides.length > 0 &&
    titulo &&
    descricao
) {

    function atualizar() {

        slides.forEach(slide => {
            slide.classList.remove("ativo");
        });

        slides[indice].classList.add("ativo");

        titulo.textContent = noticias[indice].titulo;
        descricao.textContent = noticias[indice].descricao;
    }

    function proximo() {

        indice++;

        if (indice >= slides.length) {
            indice = 0;
        }

        atualizar();
    }

    function anterior() {

        indice--;

        if (indice < 0) {
            indice = slides.length - 1;
        }

        atualizar();
    }

    const btnDown = document.getElementById("btn-down");
    const btnUp = document.getElementById("btn-up");
    const btnleft = document.getElementById("btn-left");
    const btnright = document.getElementById("btn-right");

    if (btnDown) {
        btnDown.addEventListener("click", proximo);
    }

    if (btnUp) {
        btnUp.addEventListener("click", anterior);
    }

    if (btnleft) {
        btnleft.addEventListener("click", proximo);
    }

    if (btnright) {
        btnright.addEventListener("click", anterior);
    }

    atualizar();

    setInterval(proximo, 15000);
}

console.log("Slides encontrados:", slides.length);
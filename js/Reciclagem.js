
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
        titulo: "Reciclar Hoje para Preservar o Amanhã",
        descricao: "Pequenas ações geram grandes transformações. A reciclagem reduz o desperdício, preserva recursos naturais e contribui para a construção de comunidades mais sustentáveis e conscientes."
    },

    {
        titulo: "Juntos por um Futuro Mais Verde",
        descricao: "Por meio de projetos ambientais e ações educativas, ONGs incentivam a reciclagem, a redução de resíduos e a conscientização da população sobre a importância da preservação do meio ambiente."
    },

    {
        titulo: "Transformando Resíduos em Oportunidades",
        descricao: "A reciclagem vai além da proteção ambiental. Ela gera renda, fortalece cooperativas de catadores e promove inclusão social, criando impactos positivos para pessoas e comunidades."
    },

    {
        titulo: "Cada Material Reciclado Faz a Diferença",
        descricao: "Separar corretamente os resíduos é um gesto simples que reduz a poluição, economiza energia e ajuda a construir cidades mais limpas e responsáveis para as futuras gerações."
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


//add touch nos slides para

const carrossel = document.querySelector(".carrossel-vertical");
 
let startX = 0;
let startY = 0;
 
carrossel.addEventListener("touchstart", (e) => {
startX = e.touches[0].clientX;
startY = e.touches[0].clientY;
});
 
carrossel.addEventListener("touchend", (e) => {
const endX = e.changedTouches[0].clientX;
const endY = e.changedTouches[0].clientY;
 
const deltaX = endX - startX;
const deltaY = endY - startY;
 
// Ignora movimentos mais verticais do que horizontais
if (Math.abs(deltaX) < Math.abs(deltaY)) return;
 
if (deltaX > 50) {
anterior();
}
 
if (deltaX < -50) {
proximo();
}
});
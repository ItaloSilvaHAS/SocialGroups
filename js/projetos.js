//pequno banco d dados

const ongs = [

{
    id:1,
    nome:"Instituto Esperança",
    seguidores:1284,
    categoria:"Educação",
    cidade:"São Paulo",
    telefone:"(11)99999-9999",
    email:"contato@esperanca.com",
    site:"https://google.com",
    descricao:"Projeto educacional para crianças.",
    imagem:"../imagens/crianca.jpg"
},

{
    id:2,
    nome:"Natureza Viva",
    seguidores:1284,
    categoria:"Meio Ambiente",
    cidade:"Mauá",
    telefone:"(11)98888-8888",
    email:"contato@natureza.com",
    site:"https://google.com",
    descricao:"Reflorestamento urbano.",
    imagem:"../imagens/ambiente.jpg"
},

{
    id:3,
    nome:"Saúde Para Todos",
    seguidores:133,
    categoria:"Saúde",
    cidade:"Rio de Janeiro",
    telefone:"(21)96666-6666",
    email:"contato@saude.com",
    site:"https://google.com",
    descricao:"Campanhas de prevenção.",
    imagem:"../imagens/saude.jpg"
},

{
    id:4,
    nome:"EcoFuturo",
    seguidores:1169,
    categoria:"Meio Ambiente",
    cidade:"São Bernardo do Campo",
    telefone:"(21)96666-6666",
    email:"contato@saude.com",
    site:"https://google.com",
    descricao:"ONG dedicada ao reflorestamento de áreas urbanas e à educação ambiental em escolas públicas.",
    imagem:"../imagens/meioambiente.jpg"
},

{
    id:5,
    nome:"Caminhos do Saber",
    seguidores:324,
    categoria:"Educação",
    cidade:"Mauá",
    telefone:"(21)96666-6666",
    email:"contato@saude.com",
    site:"https://google.com",
    descricao:"Oferece reforço escolar, material didático e apoio educacional para estudantes em situação de vulnerabilidade.",
    imagem:"../imagens/saber.jpg"
},

{
    id:6,
    nome:"Patinhas Unidas",
    seguidores:1223,
    categoria:"Proteção Animal",
    cidade:"Rio de Janeiro",
    telefone:"(21)96666-6666",
    email:"contato@saude.com",
    site:"https://google.com",
    descricao:"Resgata, trata e encaminha animais abandonados para adoção responsável.",
    imagem:"../imagens/cachorros.jpg"
},

{
    id:7,
    nome:"Arte que Transforma",
    seguidores:14,
    categoria:"Cultura",
    cidade:"Diadema",
    telefone:"(21)96666-6666",
    email:"contato@saude.com",
    site:"https://google.com",
    descricao:"Incentiva o desenvolvimento artístico de jovens por meio de oficinas gratuitas.",
    imagem:"../imagens/arte.jpg"
},

{
    id:8,
    nome:"Esporte e Vida",
    seguidores:121,
    categoria:"Esporte",
    cidade:"São Paulo",
    telefone:"(21)96666-6666",
    email:"contato@saude.com",
    site:"https://google.com",
    descricao:"Utiliza o esporte como ferramenta de inclusão social e desenvolvimento pessoal.",
    imagem:"../imagens/esporte.jpg"
},

{
    id:9,
    nome:"Conecta Jovem",
    seguidores:213,
    categoria:"Tecnologia",
    cidade:"Rio de Janeiro",
    telefone:"(21)96666-6666",
    email:"contato@saude.com",
    site:"https://google.com",
    descricao:"Oferece cursos gratuitos de programação, design digital e informática básica.",
    imagem:"../imagens/conecta.jpg"
},

{
    id:10,
    nome:"Mãos Solidárias",
    seguidores:123,
    categoria:"Assistência Social",
    cidade:"Guarulhos",
    telefone:"(21)96666-6666",
    email:"contato@saude.com",
    site:"https://google.com",
    descricao:"Atua no combate à fome através da arrecadação e distribuição de alimentos para famílias vulneráveis.",
    imagem:"../imagens/social.jpg"
},

{
    id:11,
    nome:"Viver Melhor",
    seguidores:123,
    categoria:"Terceira Idade",
    cidade:"Campinas",
    telefone:"(21)96666-6666",
    email:"contato@saude.com",
    site:"https://google.com",
    descricao:"Promove atividades físicas, sociais e culturais voltadas ao bem-estar da população idosa..",
    imagem:"../imagens/idade.jpg"
},

{
    id:12,
    nome:"Inclusão Sem Limites",
    seguidores:134,
    categoria:"Inclusão Social",
    cidade:"Santos",
    telefone:"(21)96666-6666",
    email:"contato@saude.com",
    site:"https://google.com",
    descricao:"Trabalha pela inclusão e autonomia de pessoas com deficiência através de programas educacionais e profissionais.",
    imagem:"../imagens/inclusao.jpg"
},

{
    id:13,
    nome:"Onda Azul",
    seguidores:788,
    categoria:"Conservação Marinha",
    cidade:"Santos",
    telefone:"(21)96666-6666",
    email:"contato@saude.com",
    site:"https://google.com",
    descricao:"Atua na preservação dos oceanos através de ações de limpeza costeira, educação ambiental e proteção da fauna marinha.",
    imagem:"../imagens/litoral.jpg"
},

{
    id:14,
    nome:"Luz do Amanhã",
    seguidores:996,
    categoria:"Capacitação Profissional",
    cidade:"São Bernardo do Campo",
    telefone:"(21)96666-6666",
    email:"capacita+@gmail.com",
    site:"https://google.com",
    descricao:"Oferece capacitação profissional gratuita para jovens e adultos, preparando-os para o mercado de trabalho e empreendedorismo.",
    imagem:"../imagens/capacita.jpg"
},

];

let paginaAtual = 1;

const cardsPorPagina = 6;

function renderizarProjetos(lista){

    const container =
    document.getElementById("cards");

    container.innerHTML = "";

    const inicio =
    (paginaAtual - 1) * cardsPorPagina;

    const fim =
    inicio + cardsPorPagina;

    const itens =
    lista.slice(inicio,fim);

    itens.forEach(ong=>{

        container.innerHTML += `

        <div class="card">

            <img
            src="${ong.imagem}"
            alt="${ong.nome}">

            <div class="card-body">

                <span class="tag">
                    ${ong.categoria}
                </span>

                <span
                class="favorito"
                onclick="favoritar(${ong.id})">
                ♡
                </span>

                <h2>${ong.nome}</h2>

                <p>${ong.descricao}</p>

                <p>
                    📍 ${ong.cidade}
                </p>

                <button
                onclick="abrirModal(${ong.id})">

                    Ver Detalhes

                </button>

            </div>

        </div>

        `;
    });

    criarPaginacao(lista);
}

//Modal abaixo

function abrirModal(id){

    const ong =
    ongs.find(item =>
    item.id === id);

seguidoresTexto.textContent =
`❤️ ${ong.seguidores} pessoas seguem este projeto`;

btnSeguir.dataset.id = id;

    modal.classList.add("ativo");

    modalImg.src = 
    ong.imagem;

    modalTitulo.textContent =
    ong.nome;

    modalCategoria.textContent =
    ong.categoria;

    modalDescricao.textContent =
    ong.descricao;

    modalLocal.textContent =
    ong.cidade;

    modalTelefone.textContent =
    ong.telefone;

    modalEmail.textContent =
    ong.email;

    modalSite.href =
    ong.site;
}

//fechar modal abaixo

const modal =
document.getElementById("modal");

const modalImg =
document.getElementById("modal-img");

const modalTitulo =
document.getElementById("modal-titulo");

const modalCategoria =
document.getElementById("modal-categoria");

const modalDescricao =
document.getElementById("modal-descricao");

const modalLocal =
document.getElementById("modal-local");

const modalTelefone =
document.getElementById("modal-telefone");

const modalEmail =
document.getElementById("modal-email");

const modalSite =
document.getElementById("modal-site");

document
.getElementById("fechar-modal")
.onclick = ()=>{

    modal.classList.remove("ativo");
};

//pesquisa abaixo

const pesquisa =
document.getElementById("pesquisa");

pesquisa.addEventListener(
"input",
filtrarProjetos
);

// Filtros abaixo

document
.getElementById("categoria")
.addEventListener(
"change",
filtrarProjetos
);

document
.getElementById("cidade")
.addEventListener(
"change",
filtrarProjetos
);

function filtrarProjetos(){

    const texto =
    pesquisa.value.toLowerCase();

    const categoria =
    document.getElementById(
    "categoria"
    ).value;

    const cidade =
    document.getElementById(
    "cidade"
    ).value;

    const resultado =
    ongs.filter(ong=>{

        return (

            ong.nome
            .toLowerCase()
            .includes(texto)

            &&

            (
                categoria === "Todos"
                ||
                ong.categoria === categoria
            )

            &&

            (
                cidade === "Todos"
                ||
                ong.cidade === cidade
            )
        );
    });

    paginaAtual = 1;

    renderizarProjetos(resultado);
}

// favoritos

function favoritar(id){

    let favoritos =

    JSON.parse(
        localStorage.getItem(
            "favoritos"
        )
    ) || [];

    if(!favoritos.includes(id)){

        favoritos.push(id);
    }

    localStorage.setItem(
        "favoritos",
        JSON.stringify(
            favoritos
        )
    );
}

//paginação

function criarPaginacao(lista){

    const total =
    Math.ceil(
    lista.length /
    cardsPorPagina
    );

    const paginacao =
    document.getElementById(
        "paginacao"
    );

    paginacao.innerHTML = "";

    for(let i=1;i<=total;i++){

        paginacao.innerHTML +=
        `
        <button
        onclick="
        paginaAtual=${i};
        renderizarProjetos(listaFiltrada)
        ">
        ${i}
        </button>
        `;
    }
}

let listaFiltrada = [...ongs];

renderizarProjetos(listaFiltrada);

// Menu mobile!!

const menuBtn = document.getElementById("menuBtn");
const menuLista = document.getElementById("menuLista");

menuBtn.addEventListener("click", () => {
    menuLista.classList.toggle("ativo");
});


// botão d seguir

const btnSeguir =
document.getElementById("btn-seguir");

const seguidoresTexto =
document.getElementById("seguidores");

// evento do botão d seguir

btnSeguir.addEventListener("click",()=>{

    const id =
    Number(btnSeguir.dataset.id);

    const ong =
    ongs.find(item=>item.id === id);

    ong.seguidores++;

    seguidoresTexto.textContent =
    `❤️ ${ong.seguidores} pessoas seguem este projeto`;

    btnSeguir.textContent =
    "✅ Seguindo";

    btnSeguir.classList.add("seguindo");

});
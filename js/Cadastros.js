function mostrarFormulario(tipo) {

    // Esconde os botões iniciais
    document.querySelector(".selecao").style.display = "none";

    // Mostra o formulário correto
    if (tipo === "ong") {
        document.getElementById("formOng").style.display = "block";
    }

    if (tipo === "usuario") {
        document.getElementById("formUsuario").style.display = "block";
    }
}

function voltar() {

    // Mostra os botões novamente
    document.querySelector(".selecao").style.display = "flex";

    // Esconde os formulários
    document.getElementById("formOng").style.display = "none";
    document.getElementById("formUsuario").style.display = "none";
}
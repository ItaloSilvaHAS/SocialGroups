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

// Troca dos botões por Perfil !!

// Cadastra ONGS

function cadastrarONG() {

    
    const inputs = document.querySelectorAll("#formOng input");

    for (let input of inputs) {
        if (input.value.trim() === "") {
            return;
        }
    }

    localStorage.setItem("logado", "ong");
    

    window.location.href = "../index.html";
}

// Cadastra o usuario !!

function cadastrarUsuario() {

    
    const inputs = document.querySelectorAll("#formUsuario input");

    for (let input of inputs) {
        if (input.value.trim() === "") {
            return;
        }
    }

    localStorage.setItem("logado", "user");
   
    window.location.href = "../index.html";
}


//  localStorage.setItem("tipo", "user");
//   localStorage.setItem("tipo", "ong");

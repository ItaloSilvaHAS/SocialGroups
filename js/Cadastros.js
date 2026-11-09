function mostrarFormulario(tipo) {

    // Esconde os botões iniciais
    document.querySelector(".selecao").style.display = "none";

 // Esconde o botão voltar
    document.getElementById("volte").style.display = "none";

    // Mostra o formulário correto
    if (tipo === "ong") {
        document.getElementById("formOng").style.display = "block";
        
    }

    if (tipo === "usuario") {
        document.getElementById("formUsuario").style.display = "block";

    }
}


// Troca dos botões por Perfil !!

function voltar() {

    // Mostra os botões novamente
    document.querySelector(".selecao").style.display = "flex";

// Mostra o botão voltar novamente
    document.getElementById("volte").style.display = "block";

    // Esconde os formulários
    document.getElementById("formOng").style.display = "none";
    document.getElementById("formUsuario").style.display = "none";

}


// cadastro abaixo

async function hashSenha(senha) {
    const dados = new TextEncoder().encode(senha);
    const buf = await crypto.subtle.digest('SHA-256', dados);
    return Array.from(new Uint8Array(buf))
        .map(b => b.toString(16).padStart(2, '0')).join('');
}

function lerContas() {
    return JSON.parse(localStorage.getItem('contas') || '[]');
}

async function cadastrar(conta, senha) {
    const contas = lerContas();

    if (contas.some(c => c.email === conta.email)) {
        alert('E-mail já cadastrado');
        return;
    }

    conta.senhaHash = await hashSenha(senha);
    contas.push(conta);
    localStorage.setItem('contas', JSON.stringify(contas));

    localStorage.setItem('logado', conta.tipo);   // "ong" ou "user"
    localStorage.setItem('nome', conta.nome);
    window.location.href = '../index.html';
}

function cadastrarONG() {
    const nome  = document.getElementById('ongNome').value.trim();
    const cnpj  = document.getElementById('ongCnpj').value.trim();
    const email = document.getElementById('ongEmail').value.trim().toLowerCase();
    const senha = document.getElementById('ongSenha').value;

    if (!nome || !cnpj || !email || !senha) {
        alert('Preencha todos os campos');
        return;
    }
    cadastrar({ tipo: 'ong', nome, cnpj, email }, senha);
}

function cadastrarUsuario() {
    const nome       = document.getElementById('userNome').value.trim();
    const nascimento = document.getElementById('userNascimento').value;
    const email      = document.getElementById('userEmail').value.trim().toLowerCase();
    const senha      = document.getElementById('userSenha').value;

    if (!nome || !email || !senha) {
        alert('Preencha nome, e-mail e senha');
        return;
    }
    cadastrar({ tipo: 'user', nome, nascimento, email }, senha);
}
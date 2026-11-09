async function hashSenha(senha) {
    const dados = new TextEncoder().encode(senha);
    const buf = await crypto.subtle.digest('SHA-256', dados);
    return Array.from(new Uint8Array(buf))
        .map(b => b.toString(16).padStart(2, '0')).join('');
}

document.getElementById('formLogin').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim().toLowerCase();
    const senha = document.getElementById('password').value;

    const contas = JSON.parse(localStorage.getItem('contas') || '[]');
    const hash = await hashSenha(senha);
    const conta = contas.find(c => c.email === email && c.senhaHash === hash);

    if (!conta) {
        alert('Email ou senha inválidos');
        return;
    }

    localStorage.setItem('logado', conta.tipo);
    localStorage.setItem('nome', conta.nome);
    window.location.href = '../index.html';
});
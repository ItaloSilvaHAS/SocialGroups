const inputFoto = document.getElementById('inputFoto');
const avatarBtn = document.getElementById('avatarBtn');
const avatarConteudo = document.getElementById('avatarConteudo');
const cameraBtn = document.getElementById('cameraBtn');
const btnSeguir = document.getElementById('btnSeguir');
const grade = document.getElementById('grade');
const CHAVE = 'fotoPerfil';

// Aplica a foto no avatar
function aplicarFoto(src) {
    avatarConteudo.innerHTML = '';
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Foto de perfil';
    avatarConteudo.appendChild(img);
}

// Abre o seletor de arquivos
avatarBtn.addEventListener('click', () => inputFoto.click());
cameraBtn.addEventListener('click', () => inputFoto.click());

// Lê a imagem escolhida, reduz o tamanho e exibe
inputFoto.addEventListener('change', () => {
    const arquivo = inputFoto.files[0];
    if (!arquivo) return;
    if (!arquivo.type.startsWith('image/')) {
        alert('Selecione um arquivo de imagem.');
        return;
    }

    const leitor = new FileReader();
    leitor.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            // Redimensiona (máx. 400px) para caber no localStorage
            const max = 400;
            const escala = Math.min(1, max / Math.max(img.width, img.height));
            const canvas = document.createElement('canvas');
            canvas.width = img.width * escala;
            canvas.height = img.height * escala;
            canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
            const dataUrl = canvas.toDataURL('image/jpeg', 0.85);

            aplicarFoto(dataUrl);
            try { localStorage.setItem(CHAVE, dataUrl); } catch (err) { }
        };
        img.src = e.target.result;
    };
    leitor.readAsDataURL(arquivo);
    inputFoto.value = '';
});

// Restaura a foto salva
try {
    const salva = localStorage.getItem(CHAVE);
    if (salva) aplicarFoto(salva);
} catch (err) { }

// Botão Seguir
btnSeguir.addEventListener('click', () => {
    const seguindo = btnSeguir.classList.toggle('seguindo');
    btnSeguir.textContent = seguindo ? 'Seguindo' : 'Seguir';
});

// ---------- Galeria (9 cards) ----------
const CHAVE_GALERIA = 'fotosGaleria';
let galeria = [];
try { galeria = JSON.parse(localStorage.getItem(CHAVE_GALERIA)) || []; } catch (err) { }

// Seletor de arquivos usado pelos cards
const inputGaleria = document.createElement('input');
inputGaleria.type = 'file';
inputGaleria.accept = 'image/*';
inputGaleria.hidden = true;
document.body.appendChild(inputGaleria);

let cardAtual = null;

function mostrarFoto(card, src) {
    card.innerHTML = '';
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Foto da galeria';
    card.appendChild(img);
}

// Gera os 9 cards
for (let i = 0; i < 9; i++) {
    const card = document.createElement('button');
    card.className = 'card';
    card.setAttribute('aria-label', 'Foto ' + (i + 1));
    if (galeria[i]) mostrarFoto(card, galeria[i]);

    card.addEventListener('click', () => {
        cardAtual = i;
        inputGaleria.click();
    });
    grade.appendChild(card);
}

// Ao escolher uma imagem, redimensiona e coloca no card clicado
inputGaleria.addEventListener('change', () => {
    const arquivo = inputGaleria.files[0];
    if (!arquivo || cardAtual === null) return;

    const leitor = new FileReader();
    leitor.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            const max = 500;
            const escala = Math.min(1, max / Math.max(img.width, img.height));
            const canvas = document.createElement('canvas');
            canvas.width = img.width * escala;
            canvas.height = img.height * escala;
            canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
            const dataUrl = canvas.toDataURL('image/jpeg', 0.8);

            galeria[cardAtual] = dataUrl;
            mostrarFoto(grade.children[cardAtual], dataUrl);
            try { localStorage.setItem(CHAVE_GALERIA, JSON.stringify(galeria)); } catch (err) { }
        };
        img.src = e.target.result;
    };
    leitor.readAsDataURL(arquivo);
    inputGaleria.value = '';
});


document.getElementById('btnLimpar').addEventListener('click', () => {


    // Remove do navegador
    try {
        localStorage.removeItem(CHAVE);
        localStorage.removeItem(CHAVE_GALERIA);
    } catch (err) { }

    // Volta o avatar para a silhueta padrão
    avatarConteudo.innerHTML = FOTO_PADRAO;

    // Esvazia os cards
    galeria = [];
    Array.from(grade.children).forEach(card => { card.innerHTML = ''; });
});

// Ao escolher uma imagem, redimensiona e coloca no card clicado
inputGaleria.addEventListener('change', () => {
    const arquivo = inputGaleria.files[0];
    if (!arquivo || cardAtual === null) return;

    const leitor = new FileReader();
    leitor.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            const max = 500;
            const escala = Math.min(1, max / Math.max(img.width, img.height));
            const canvas = document.createElement('canvas');
            canvas.width = img.width * escala;
            canvas.height = img.height * escala;
            canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
            const dataUrl = canvas.toDataURL('image/jpeg', 0.8);

            galeria[cardAtual] = dataUrl;
            mostrarFoto(grade.children[cardAtual], dataUrl);
            try { localStorage.setItem(CHAVE_GALERIA, JSON.stringify(galeria)); } catch (err) { }
        };
        img.src = e.target.result;
    };
    leitor.readAsDataURL(arquivo);
    inputGaleria.value = '';
});

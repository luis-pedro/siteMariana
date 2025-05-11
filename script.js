// CONTADOR DE ANOS E MESES
function atualizarContador() {
    const dataInicio = new Date(2024, 4, 8); // Maio é mês 4 (0-based)
    const hoje = new Date();

    let anos = hoje.getFullYear() - dataInicio.getFullYear();
    let meses = hoje.getMonth() - dataInicio.getMonth();

    if (hoje.getDate() < dataInicio.getDate()) {
        meses -= 1;
    }

    if (meses < 0) {
        anos -= 1;
        meses += 12;
    }

    const contador = document.getElementById('contador');
    if (contador) {
        contador.textContent = `${anos} ano(s) e ${meses} mês(es)`;
    }
}

// Atualiza a cada minuto e ao carregar
setInterval(atualizarContador, 60000);
atualizarContador();

//--------------------------------------

//CARROSSEL
let indiceAtual = 0;
const slides = document.querySelectorAll('.slide');
const indicadores = document.querySelectorAll('.indicador');

function mostrarSlide(indice) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('ativa', i === indice);
        indicadores[i].classList.toggle('ativo', i === indice);
    });
}

function proximoSlide() {
    indiceAtual = (indiceAtual + 1) % slides.length;
    mostrarSlide(indiceAtual);
}

// Troca a cada 3 segundos
setInterval(proximoSlide, 3000);
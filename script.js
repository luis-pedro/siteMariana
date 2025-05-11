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
const botaoAnterior = document.querySelector('.botao.anterior');
const botaoProximo = document.querySelector('.botao.proximo');

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

function slideAnterior() {
    indiceAtual = (indiceAtual - 1 + slides.length) % slides.length;
    mostrarSlide(indiceAtual);
}

// Avançar a foto ( 5segundos )
let intervalo = setInterval(proximoSlide, 5000);

botaoProximo.addEventListener('click', () => {
    proximoSlide();
    reiniciarIntervalo();
});

botaoAnterior.addEventListener('click', () => {
    slideAnterior();
    reiniciarIntervalo();
});

function reiniciarIntervalo() {
    clearInterval(intervalo);
    intervalo = setInterval(proximoSlide, 5000);
}

mostrarSlide(indiceAtual);

//--------------------------------------

//CONTADOR
// Data de início
const dataInicio = new Date('2024-05-08T00:00:00');
        
    function atualizarCronometro() {
        const agora = new Date();
        const tempoDecorrido = agora - dataInicio;

        // Cálculo dos valores
        const dias = Math.floor(tempoDecorrido / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tempoDecorrido % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((tempoDecorrido % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tempoDecorrido % (1000 * 60)) / 1000);

        // Exibir o cronômetro
        document.getElementById('cronometro').innerHTML = dias + " dias " + String(horas).padStart(2, '0') + ":" + String(minutos).padStart(2, '0') + ":" + String(segundos).padStart(2, '0');
    }

    // Atualiza o cronômetro a cada segundo
    setInterval(atualizarCronometro, 1000);
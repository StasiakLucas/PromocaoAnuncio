//didatico

const contador = document.querySelector(".contador");


// Definindo a data final da promoção (coloque a data desejada aqui)
const dataFinal = new Date('2025-04-30T23:59:59');

function atualizaContador() {
    const hoje = new Date();
    const intervaloTempo = dataFinal - hoje;

    if (intervaloTempo <= 0) {
        contador.textContent = "Promoção encerrada!";
    } else {
        const dias= Math.floor(intervaloTempo / (1000 * 60 * 60 * 24));
        const horas = Math.floor((intervaloTempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((intervaloTempo % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((intervaloTempo % (1000 * 60)) / 1000);

        contador.textContent = dias + "d " + horas + "h " + minutos + "m " + segundos + "s";
    }
}

// Atualizando o contador a cada segundo
setInterval(atualizaContador, 1000);

// Atualizando o contador imediatamente ao carregar a página
atualizaContador();
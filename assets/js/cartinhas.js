function cartinhasComuns(targetId) {
    const cartas = ['carta', 'carta1'];
    cartas.forEach(id => {
        document.getElementById(id).style.display = (id === targetId) ? 'block' : 'none';
    });
}


// Filtra as cartas baseado no tipo 'novos' ou 'todos'
function filtrarCartas(tipo) {
    var cartas = document.querySelectorAll('.carta');
    cartas.forEach(function (carta) {
        if (tipo === 'todos') {
            carta.style.display = 'block'; // Mostra todas as cartas
        } else if (tipo === 'novos') {
            if (carta.getAttribute('data-novo') === 'true') {
                carta.style.display = 'block'; // Exibe apenas cartas com 'data-novo' igual a 'true'
            } else {
                carta.style.display = 'none'; // Oculta as cartas que não são novas
            }
        }
    });
}

// Filtra as cartas por data selecionada no input
function filtrarCartasPorData() {
    var dataFiltro = document.getElementById('dataFiltro').value;
    var cartas = document.querySelectorAll('.carta');

    cartas.forEach(function (carta) {
        var dataCarta = carta.getAttribute('data-data').substring(0, 10);
        if (dataFiltro === '' || dataFiltro === dataCarta) {
            carta.style.display = 'block'; // Mostra a carta se a data for igual à selecionada
        } else {
            carta.style.display = 'none'; // Oculta se a data não corresponder
        }
    });
}
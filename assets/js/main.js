function display(option) {
    document.getElementById("home").className = (option === 0) ? 'aparecer' : 'desaparecer';
    document.getElementById("canto_romantico").className = (option === 1) ? 'aparecer' : 'desaparecer';
    document.getElementById("cartinhas-normais-secao").className = (option === 2) ? 'aparecer' : 'desaparecer';
}

function closeOffcanvas() {
    var offcanvas = document.getElementById('offcanvasSidebar');
    var bootstrapOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
    if (bootstrapOffcanvas) {
        bootstrapOffcanvas.hide();
    }
}

const startDate = new Date("2024-09-22"); // Data do início do relacionamento
const today = new Date();

// Cálculo de dias juntos
const totalDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

// Exibir o total de dias
document.getElementById("totalTime").innerText = `${totalDays} dias juntos.`;

// Cálculo do próximo aniversário
const nextAnniversary = new Date(today.getFullYear(), 8, 22); // 22 de setembro deste ano
if (today > nextAnniversary) {
    nextAnniversary.setFullYear(today.getFullYear() + 1); // Próximo ano se já passou
}

// Função para atualizar os dias, meses e segundos restantes
function updateCountdown() {
    const now = new Date();
    const secondsLeft = Math.floor((nextAnniversary - now) / 1000); // Segundos restantes
    const daysLeft = Math.floor((nextAnniversary - now) / (1000 * 60 * 60 * 24)); // Dias restantes

    // Cálculo de meses restantes
    const monthsLeft = Math.floor((nextAnniversary - now) / (1000 * 60 * 60 * 24 * 30)); // Aproximando um mês como 30 dias

    document.getElementById("monthsLeft").innerText = `Faltam ${monthsLeft} meses para o próximo aniversário!`;
    document.getElementById("secondsLeft").innerText = `Faltam ${secondsLeft} segundos para o próximo aniversário!`;
}

// Chamar a função a cada segundo
setInterval(updateCountdown, 1000);
updateCountdown(); // Chamada inicial para exibir imediatamente

// Progresso
const progressBarDays = document.getElementById("progressBarDays");
const progressText = document.getElementById("progressText");

// Progresso para dias
const totalAnniversaryDays = 365; // Total de dias em um ano
const progressPercentageDays = (totalDays / totalAnniversaryDays) * 100;

progressBarDays.style.width = `${progressPercentageDays}%`;
progressText.innerText = `${Math.round(progressPercentageDays)}%`;



function checkCode() {
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    // Defina as letras válidas para verificação
    const validCodes = []; // Exemplos de códigos válidos

    // Coleta os valores dos inputs
    const enteredCodes = [
        document.getElementById('codeInput1').value.trim().toUpperCase(),
        document.getElementById('codeInput2').value.trim().toUpperCase(),
        document.getElementById('codeInput3').value.trim().toUpperCase(),
        document.getElementById('codeInput4').value.trim().toUpperCase(),
        document.getElementById('codeInput5').value.trim().toUpperCase(),
        document.getElementById('codeInput6').value.trim().toUpperCase(),
    ];

    // Limpa mensagens anteriores
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';

    // Verifica se todos os códigos estão válidos
    const allCodesValid = enteredCodes.every(code => validCodes.includes(code));

    if (allCodesValid) {
        // Redireciona para banco.html se todos os códigos forem válidos
        window.location.href = 'banco.html';
    } else {
        // errorMessage.textContent = `Um ou mais códigos são inválidos.`;
        errorMessage.textContent = `Não há código, ainda.`;
        errorMessage.style.display = 'block'; // Exibe a mensagem de erro
    }
}
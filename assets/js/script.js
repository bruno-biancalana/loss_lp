/* 
    JS das funções:
    -> LOGIN ;
    -> CONTROLE DE VAGAS
    
*/



// ### DEFINIÇÃO DE VARIÁVEIS PARA O CONTROLE DE ESTACIONAMENTO
let numeroVagas = 0;
const numeroMaximoVagas = 100;
let totalEntradas = 0;
let totalSaidas = 0;

// ### FUNÇÃO DE LOGIN -> INDEX.HTML ###
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Inclusão de usuários)
    if (username === "admin" && password === "admin" || 
        username === "teste" && password === "teste" || 
        username === "bruno" && password === "bruno") {

        // Redirecione para a Home
        window.location.replace('home.html');
        localStorage.setItem('username', username);
    } else {

        // Credenciais incorretas
        document.getElementById("mensagemErro").innerText = "Credenciais incorretas. Tente novamente.";
    }
});


// ### FUNÇÕES DO CONTROLE DE ESTACIONAMENTO -> CONTADOR.HTML ###

function registrarClique(tipo) {
    const dataHora = new Date().toLocaleString();

    const registros = JSON.parse(localStorage.getItem('registros')) || [];

    registros.push({ tipo, dataHora });

    localStorage.setItem('registros', JSON.stringify(registros));
}

function registrarEntrada() {
    if (numeroVagas < numeroMaximoVagas) {
        numeroVagas++;
        totalEntradas++;
        atualizarNumeroVagas();
    }
}

function registrarSaida() {
    if (numeroVagas > 0) {
        numeroVagas--;
        totalSaidas++;
        atualizarNumeroVagas();
    }
}

function atualizarNumeroVagas() {
    document.getElementById("numeroVagas").innerText = numeroVagas;
}

function gerarOcorrencia() {
    const numeroTelefone = '11953656061'; 
    const mensagem = 'Olá! Preciso abrir uma ocorrencia';

    const linkWhatsapp = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagem)}`;

    window.location.href = linkWhatsapp;
}

function gerarRelatorio() {
    const relatorioDiv = document.getElementById("relatorio");
    const mediaOcupacao = (totalEntradas - totalSaidas) / 100 * 100 || 0;

    const dataHoraAtual = new Date();
    const formatoDataHora = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    const dataHoraFormatada = dataHoraAtual.toLocaleDateString('pt-BR', formatoDataHora);

    const relatorioHTML = `
        <h2>Relatório gerado em:</h2>
        <p>${dataHoraFormatada}</p>
        <p>Total de Entradas: ${totalEntradas}</p>
        <p>Total de Saídas: ${totalSaidas}</p>
        <p>Média de Ocupação: ${mediaOcupacao.toFixed(2)}%</p>
    `;

    relatorioDiv.innerHTML = relatorioHTML;
    
}
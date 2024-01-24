var cartaInimiga = document.getElementById("inimigo");
var cartaEscolhida = document.getElementById("ataque");

var pedra = "url('img/pedra.png')";
var tesoura = "url('img/tesoura.png')";
var papel = "url('img/papel.png')";

var ataqueInimigo = "";
var ataque = "";

function LimparEfeito(){
    /* Limpa o efeito de morte da carta para que seja aplicado novamente */
    cartaInimiga.style.filter = "none";
    cartaEscolhida.style.filter = "none";
}
function GerarInimigo(){
    /* Gera um número aleatório no raio de 1 a 3 */
    var sorteio = Math.floor(Math.random() * 3) + 1;
    /* Aplica o Background correto para cada ataque sorteado */
    if (sorteio == 1){
        cartaInimiga.style.backgroundImage = pedra;
        ataqueInimigo = "Pedra";
    }
    else if (sorteio == 2){
        cartaInimiga.style.backgroundImage = tesoura;
        ataqueInimigo = "Tesoura";
    }
    else if (sorteio == 3){
        cartaInimiga.style.backgroundImage = papel;
        ataqueInimigo = "Papel";
    }   
}
function Pedra(){
    cartaEscolhida.style.backgroundImage = pedra;
    ataque = "Pedra";
}
function Tesoura(){
    cartaEscolhida.style.backgroundImage = tesoura;
    ataque = "Tesoura";
}
function Papel(){
    cartaEscolhida.style.backgroundImage = papel;
    ataque = "Papel";
}
function ConsultarResultado(){
    if (ataqueInimigo == "Pedra" && ataque == "Tesoura"){
        /* Aplicando Filtro Cinza para as cartas perdidas */
        cartaEscolhida.style.filter = "grayscale(100%)";
        alert("Tesoura perde para Pedra!");
    }
    else if (ataqueInimigo == "Tesoura" && ataque == "Pedra"){
        /* Aplicando Filtro Cinza para as cartas perdidas */
        cartaInimiga.style.filter = "grayscale(100%)"
        alert("Pedra vence Tesoura!");
    }
    else if (ataqueInimigo == "Pedra" && ataque == "Papel"){
        /* Aplicando Filtro Cinza para as cartas perdidas */
        cartaInimiga.style.filter = "grayscale(100%)";
        alert("Papel vence Pedra!");
    }
    else if (ataqueInimigo == "Papel" && ataque == "Pedra"){
        /* Aplicando Filtro Cinza para as cartas perdidas */
        cartaEscolhida.style.filter = "grayscale(100%)";
        alert("Pedra perde para Papel!");
    }
    else if (ataqueInimigo == "Tesoura" && ataque == "Papel"){
        /* Aplicando Filtro Cinza para as cartas perdidas */
        cartaEscolhida.style.filter = "grayscale(100%)";
        alert("Papel perde para Tesoura!");
    }
    else if (ataqueInimigo == "Papel" && ataque == "Tesoura"){
        /* Aplicando Filtro Cinza para as cartas perdidas */
        cartaInimiga.style.filter = "grayscale(100%)";
        alert("Tesoura vence Papel!");
    }
    else if (ataqueInimigo == ataque){
        alert("Empate");
    }
}
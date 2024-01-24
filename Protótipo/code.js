var cartaInimiga = document.getElementById("inimigo");
var cartaEscolhida = document.getElementById("ataque");

var pedra = "url('img/tijolo.jpg')";
var tesoura = "url('img/tesoura.jpg')";
var papel = "url('img/papel.jpg')";

var ataqueInimigo = "";
var ataque = "";

function GerarInimigo(){
    var sorteio = Math.floor(Math.random() * 3) + 1;
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
        alert("Tesoura perde para Pedra!");
    }
    else if (ataqueInimigo == "Tesoura" && ataque == "Pedra"){
        alert("Pedra vence Tesoura!");
    }
    else if (ataqueInimigo == "Pedra" && ataque == "Papel"){
        alert("Pedra perde para Papel!");
    }
    else if (ataqueInimigo == "Papel" && ataque == "Pedra"){
        alert("Papel vence Pedra!");
    }
    else if (ataqueInimigo == "Tesoura" && ataque == "Papel"){
        alert("Papel perde para Tesoura!");
    }
    else if (ataqueInimigo == "Papel" && ataque == "Tesoura"){
        alert("Tesoura vence Papel!");
    }
    else if (ataqueInimigo == ataque){
        alert("Empate");
    }
}
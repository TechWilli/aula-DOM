const certo = document.querySelector("#certo");
const errado = document.querySelector("#errado");

// colocar funções nos eventos on para que isso possa acontecer, veja o exemplo simples abaixo;

function gatoErrado(){
    errado.src = "groselha";
}

function gatoVolta(){
    errado.src = "https://placekitten.com/200/400";
}

function gatoCerto(){
    certo.src = "http://placekitten.com/300/400";
    alert("PARABENS, ELE FUGIU PQ VC DA MEDOOOO");
}

errado.onmouseenter = gatoErrado;
certo.onclick = gatoCerto;
errado.onmouseleave = gatoVolta;

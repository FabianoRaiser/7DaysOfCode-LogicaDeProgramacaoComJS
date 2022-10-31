let numero;
let userNumEscolido = "";
let maximo = 10;
let minimo = 0;
let tentativaMax = 3
let acertou = false;

function escolheNumero() {
    numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    console.log(numero);
}

alert(`Eu escolhi um numero entre ${minimo} e ${maximo}. Adivinhe qual é!`);

function verificaNumero() {
    for (let tentativa = 1; tentativa <= tentativaMax; tentativa++) {
        userNumEscolido = parseInt(prompt(`Escolha um Número. Você tem mais ${tentativaMax - tentativa} tentativas alem dessa.`));
        if (userNumEscolido === numero) {
            alert(`Parabéns você acertou! o Numero era ${numero} `);
            acertou = true;
            break;
        } 
        alert(`Você errou!`)
    }
    if(!acertou){
        alert(`Infelizmente você não acertou, o número que eu escolhi era ${numero}`);
    }
}


escolheNumero();
verificaNumero();

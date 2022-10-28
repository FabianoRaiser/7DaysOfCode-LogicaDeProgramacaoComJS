//Variáveis do Usuário
let userName;
let userAge;
let userLanguage;

//Start
if (confirm('Vamos começar?')){
    pegarDados();
} else {
    alert('Tudo bem, até mais!')
}

//Pegar os Dados do Usuário
function pegarDados(){
    userName = window.prompt('Qual o seu nome?');
    userAge = window.prompt('Qual a sua idade?');
    userLanguage = window.prompt('Qual Linguagem de Programação você está estudando?');
}

//Validar se os dados foram inseridos
if (confirm('Podemos prosseguir?')){
    validarDados();
} else {
    alert('Tudo bem, foi bom te conhecer. Até mais!');
}

function validarDados(){
    if (userName == "" || userAge == ""  || userLanguage == ""){
        alert('Você esqueceu algo. Preencha novamente.');
        window.location.reload();
    } else {
        alert(`Olá ${userName}, você tem ${userAge} anos e já está aprendendo ${userLanguage}`);
        enjoyQuestion();
    }

}

//Pergunta Final
function enjoyQuestion () {
    let userLanguageEnjoy = window.prompt(`Você está gostando de estudar ${userLanguage}? `);

    if (userLanguageEnjoy == 'Sim' || userLanguageEnjoy == 'sim'){
        alert('Muito bom! Continue estudando e você terá muito sucesso.');
    } else {
        alert('Ahh que pena... Já tentou aprender outras linguagens?');
    }
}

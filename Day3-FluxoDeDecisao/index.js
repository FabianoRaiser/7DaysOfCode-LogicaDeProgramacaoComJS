let areaEscolida;
let areaFront;
let areaBack;
let formacao;
let escolhasTec = [];

escolheArea();
escolheFormacao();
escolheTec();
resumo();

function escolheArea() {
    areaEscolida = window.prompt('Você quer seguir por qual caminho, Front-end ou Back-end?');
    if (areaEscolida === 'Front-end' || areaEscolida === 'front-end') {
        areaFront = window.prompt('Legal! Agora, com qual tecnologia você vai aprender, React ou Vue?');
    } else if (areaEscolida === 'Back-end' || areaEscolida === 'back-end') {
        areaBack = window.prompt('Legal! Agora, com qual tecenologai você vai aprender, C# ou Java?');
    } else {
        alert('Você não escolheu nenhuma das áreas! Escolha entre Front-end ou Back-end.');
        escolheArea();
    }
}

function escolheFormacao() {
    formacao = window.prompt('Agora você vai serguir para onde, será um profissional "Fullstack" ou "Especializado"');
    if (formacao === 'Fullstack' || formacao === 'fullstack') {
        alert('Você escolheu seguir pelo caminho do Fullstack!');
    } else if (formacao === 'Especializado' || formacao === 'especializado') {
        alert('Você esolheu por ser um profissional Especializado');
    } else {
        alert('Você não escreveu uma área valida, por favor escolha entre "Fullstack" ou "Especializado"');
        escolheFormacao();
    }
}

function escolheTec() {
    alert('Nessa carreira podemos conhecer varias Tecnologias.');
    let querAdd = confirm('Quer adicionar alguma tecnologia na sua lista?');
    while (querAdd) {
        escolhasTec.push(window.prompt('Qual Tecnologia você quer adicionar?'));
        querAdd = confirm('Quer adicionar mais alguma Tecnologia?');
    }
}

function resumo() {
    if (areaEscolida === 'Front-end' || areaEscolida === 'front-end') {
        alert(`Você está seguido o caminho ${areaEscolida}, aprendendo a tecnologia ${areaFront} por primeiro. Você quer ser um profissional ${formacao}, dominando as seguintes tecnologias: ${escolhasTec}. Bons estudos`);
    } else if (areaEscolida === 'Back-end' || areaEscolida === 'back-end') {
        alert(`Você está seguido o caminho ${areaEscolida}, aprendendo a tecnologia ${areaBack} por primeiro. Você quer ser um profissional ${formacao}, dominando as seguintes tecnologias: ${escolhasTec}. Bons estudos`);
    }
}

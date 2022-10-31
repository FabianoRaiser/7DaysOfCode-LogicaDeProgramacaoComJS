let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

function addItens(){
    let item = prompt(`Qual item quer adicionar a lista?`);
    let tipoItem = prompt(`Qual o tipo do item? Ditite o Número: 1-Frutas, 2-Laticínios, 3-Congelados, 4-Doces`);

    if(tipoItem == 1){
        frutas.push(item);
    }
    if(tipoItem == 2){
        laticinios.push(item);
    }
    if(tipoItem == 3){
        congelados.push(item);
    }
    if(tipoItem == 4){
        doces.push(item);
    }
}

function criaLista(){
    addItens();
    if(confirm(`Quer adicionar mais alguma coisa?`)){
        criaLista();
    } else {
        document.write(`Sua Lista de Compras ficou assim.</br> <strong>Frutas:</strong> ${frutas}</br> <strong>Laticínios:</strong> ${laticinios}</br> <strong>Congelados:</strong> ${congelados}</br> <strong>Doces:</strong> ${doces}.`);
    }
}

criaLista();

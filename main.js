//Para poder pegar o input do usuário
const prompt = require('prompt-sync')();

//Contextualizando a jornada
const historia = 'Essa é a jornada diária do nosso herói brasileiro comum na difícil missão de dormir tranquilamente após mais um dia de trabalho e estudo.\r\n Se você também é um heroí  brasileiro comum, responda a cada uma das perguntas a seguir para saber se você terá uma noite tranquila de sono, sem preocupações com os desafios vividos no dia.\r\nMas ATENÇÃO: Você deve responder apenas SIM ou NÃO para cada uma das perguntas!'

console.log(historia)
console.log()

//Perguntas para o nosso herói
let resp1 =''
while (true) {
    console.log()
    resp1 = prompt('Sem problemas no transito e conseguiu chegar no trabalho a tempo?').toLowerCase();
    if (resp1 === 'sim') {
        break;
    } else if (resp1 === 'nao'){
        break;
    } else{
        console.log()
        console.log('Suas respostas devem ser apenas "sim" ou "nao".');
        console.log('Mas não se preocupe, basta responder novamente.');
        console.log()
    }
}

let resp2 =''
while (true) {
    console.log()
    resp2 = prompt('Conseguiu fazer todas as tarefas do trabalho?').toLowerCase();
    if (resp2 === 'sim') {
        break;
    } else if (resp2 === 'nao'){
        break;
    } else{
        console.log()
        console.log('Suas respostas devem ser apenas "sim" ou "nao".');
        console.log('Mas não se preocupe, basta responder novamente.');
        console.log()
    }
}
let resp3 =''
while (true) {
    console.log()
    resp3 = prompt('Estudou na hora do almoço para a as atividades da faculdade?').toLowerCase();
    if (resp3 === 'sim') {
        break;
    } else if (resp3 === 'nao'){
        break;
    } else{
        console.log()
        console.log('Suas respostas devem ser apenas "sim" ou "nao".');
        console.log('Mas não se preocupe, basta responder novamente.');
        console.log()
    }
}
let resp4 =''
while (true) {
    console.log()
    resp4 = prompt('Sem problemas com o transito, não teve que extender a jornada de trabalho e chegou para a 1ª aula da faculdade?').toLowerCase();
    if (resp4 === 'sim') {
        break;
    } else if (resp4 === 'nao'){
        break;
    } else{
        console.log()
        console.log('Suas respostas devem ser apenas "sim" ou "nao".');
        console.log('Mas não se preocupe, basta responder novamente.');
        console.log()
    }
}
let resp5 =''
while (true) {
    console.log()
    resp5 = prompt('Chegou em casa sem problemas no caminho de volta(como roubos ou falta de onibus)?').toLowerCase();
    if (resp5 === 'sim') {
        break;
    } else if (resp5 === 'nao'){
        break;
    } else{
        console.log()
        console.log('Suas respostas devem ser apenas "sim" ou "nao".');
        console.log('Mas não se preocupe, basta responder novamente.');
        console.log()
    }
}

//contagem das respostas "sim" do nosso herói
let contador = 0;
if (resp1 === 'sim'){
 contador++
}
if (resp2 === 'sim'){
    contador++
    }
if (resp3 === 'sim'){
contador++
}
if (resp4 === 'sim'){
    contador++
    }
if (resp5 === 'sim'){
        contador++
        }

/*O que irá acontecer com o herói no final do 
de mais um dia */
if(contador === 5){
    console.log()
    console.log('Você é realmente um heroi brasileiro comum!\r\nTerá uma ótima noite de sono')
} else if(contador=== 4){
    console.log()
    console.log('Você é um heroi brasileiro comum!\r\nTeve um dia bom, durma bem!') 
} else if(contador=== 3){
    console.log()
    console.log('Durma tranquilo herói, não foi um dia tão ruim.\r\nAcredite, poderia ter sido pior.')  
} else if(contador >=1 && contador <=2 ){
    console.log()
    console.log('A vida é dura meu heroí, tente dormir\r\npois precisará de forças amanhã.')  
} else {
    console.log()
    console.log('Meu herói, hoje foi ruim, tome aquele tarja preta pra conseguir dormir,\r\namanã é outro dia')
}

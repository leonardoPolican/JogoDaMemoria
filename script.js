let order = [];
let clickOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//Criando cor Aleatoria
let shufflerOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickOrder = [];

     for(let i in order) {
         let elementColor = createElement(order[i]);
         lightColor(elementColor, Number(i) + 1);
     }
}

//Acende a proxima cor
let lightColor = (element, number) =>{
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    },number);
}

//Checa se o botoes estão na mesma ordem gerada pelo jogo
let checkOrder = () => {
    for(let i in clickOrder){
        if(clickOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//Função para o click do usuario
let click = (color) => {
    clickOrder[clickOrder.length] = color;
    createElement(color).classList.add('selected');

    setTimeout(() =>{
        createElement(color).classList.remove('selected');
        checkOrder();
    },250);
    
}

//Função que retorna cor
let createElement = (color) => {
    if(color == 0){
        return green;
    } else if(color == 1){
        return red;
    } else if(color == 2){
        return yellow;
    } else if(color == 3){
        return blue;
    }
}

//Função para proxima nivel
let nextLevel = () =>{
    score++;
    shufflerOrder();
}

//Função Game Over
let gameOver = () =>{
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo1\nClick em OK para iniciar um novo jogo`);
    order = [];
    clickOrder = [];

    playGame();

}

let playGame = () =>{
    alert('Bem vindo ao Memorize! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);



playGame();
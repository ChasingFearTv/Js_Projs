function diceRoll(min, max) {
    min = Math.ceil(1);
    max = Math.floor(6);
    return Math.floor(Math.random() * (max - min) + min);
}

function diceRoll2(){
    return Math.floor((Math.random() * 6) + 1);
}
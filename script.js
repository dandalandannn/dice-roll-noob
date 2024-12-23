const ROLL = document.getElementById("ROLL");
const rollContainer = document.getElementById("rollContainer");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const ROLLED = document.getElementById("ROLLED");


let roll1;
let roll2;
let total;

ROLL.onclick = function(){
    rollContainer.style.display = 'block';
    roll1 = Math.floor(Math.random() * 6 ) + 1;
    roll2 = Math.floor(Math.random() * 6 ) + 1;
    num1.textContent = roll1;
    num2.textContent = roll2;
    total = roll1+roll2;
    if (total == 12){
        ROLLED.textContent = `Congrats u won!`;
    }else{
        ROLLED.textContent = `You rolled a total of ${total}!`;
    }
}
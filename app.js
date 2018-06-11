let container = document.getElementById('dice-container')
class Die {
    constructor(x, y){
        this.div = document.createElement('div');
        this.div.classList.add('square');
        this.div.style.left = '$(x)px';
        this.div.style.top = '$(y)px';
        container.appendChild(this.div);

    }
}
let diceButton = document.getElementById('diceButton');
diceButton.addEventListener('click', insertSquare);

function insertSquare() {
    let xVal = (100);
    let yVal = (200);
    let sq = new Die(xVal, yVal);
}

function randomVal(min, max) {
    math.floor(Math.random() * 6) + 1
}
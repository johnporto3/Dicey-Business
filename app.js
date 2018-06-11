const MAX = 800;

class Square {
    constructor(x, y){
        this.div = document.createElement('div');
        this.div.classList.add('square');
        this.div.style.left = '$(x)px';
        this.div.style.top = '$(y)px';

    }
}



let diceButton = document.getElementById('diceButton');
diceButton.addEventListener('click', insertSquare);

function insertSquare() {
    let xVal = (100);
    let yVal = (200);
}


// function randomVal(min, max) {
//     math.floor(Math.random() * 6) + 1
// }





// class Die {
//     constructor(){
//         this.div = document.createElement[('div');
//         div.className = 'dice']

//     }
// }
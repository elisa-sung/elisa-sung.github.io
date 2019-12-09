var inputs = document.querySelectorAll('.input');
var startButton = document.querySelector('.start-button')
var playing = false;
var cardsDiv = document.querySelectorAll('.card')
var num = 25;

// startButton.addEventListener('click', handleStartButtonClick)
// IF YOU USE I YOU CAN ACCESS EVERYTHIN IN THE INPUT DIV
for(var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keydown', handleKeydownEventOfInput)
}

startButton.addEventListener('click', startGame)

function handleKeydownEventOfInput() {
    if(event.key == 'Enter') {
       var currentInput = event.target;
       var value = currentInput.value;
       var parentDiv = currentInput.parentNode;
       parentDiv.removeChild(currentInput);
       parentDiv.innerHTML = value;
       num--;
    }
}

function startGame () {
    if(num == 0) {
        for (var i = 0; i < cardsDiv.length; i++) {
            cardsDiv[i].addEventListener('click', clickedBox)
        }
    }
}


function clickedBox () {
    var clickedBox = event.target;
    clickedBox.style.backgroundColor = 'Red';
    clickedBox.style.color = 'White';
}

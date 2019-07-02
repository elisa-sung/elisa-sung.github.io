var guessFieldInput = document.getElementById("guessField");
var rightNumber;
var iterations = 1;
document.getElementById("submitguess").onclick = handleSubmission;
guessFieldInput.addEventListener('keyup', handleEnterKey);
function handleEnterKey() {
    if (event.key == "Enter") {
       handleSubmission();
    }
}

function handleSubmission(){  
    rightNumber = guessFieldInput.value; 
    guessNumberAI();
}

function guessNumberAI() {
    var i = 1;
    while (i != rightNumber) {
        i = 1 + i;
        iterations++;
    }
    alert(`Is your number ${rightNumber}`)
    alert(`it took ${iterations} number of guesses for the computer to guess your number`)
    // console.log(i);   
    // console.log(iterations);   
    iterations = 1;
    i = 1;
 }



 

 
 




// Display the question on the screen
var questionElement = document.querySelector(".question")
var inputElement = document.querySelector(".input")
var resultElement = document.querySelector(".result")
var scoreElement= document.querySelector(".score")
var refreshElement= document.querySelector(".refresh")

var score = 0;

scoreElement.innerHTML = `Score: ${score}`;

function generateRandomNumber() {
    return Math.floor(Math.random() * 100)
}
var answer;
var newQuestion;

function generateAdditionQuestion() {
    // get two random numbers (numbers have to be in between 0 and 100, numbers must be whole numbers)
    var randomNumber1 = generateRandomNumber() 
    var randomNumber2 = generateRandomNumber() 

    // Add the two randome numbers 
    answer = randomNumber1 + randomNumber2

    // Generate the question for HTML
    newQuestion = `${randomNumber1} + ${randomNumber2} =`
    questionElement.innerHTML= newQuestion
}

refreshElement.addEventListener("click", handleRefreshClick)
function handleRefreshClick() {
    event.preventDefault();
    generateAdditionQuestion();
    inputElement.disabled = false
    inputElement.focus()
}

// When the user presses enter, get users input first 

inputElement.addEventListener("keyup", handleInput )
// key up or key down

function handleInput() {
    console.log(event.key)
    if(event.key == "Enter") {
        var input = inputElement.value 
        console.log(input)
        if(input == answer) {
            resultElement.innerHTML = "Correct"
            resultElement.style.color = "Green"
            score ++
            scoreElement.innerHTML = `Score: ${score}`;
            inputElement.value =""
            inputElement.disabled = true
        }else {
            resultElement.innerHTML = "Wrong"
            resultElement.style.color = "Red"
            score = 0;
            scoreElement.innerHTML = `Score: ${score}`;
            inputElement.value =""
            inputElement.disabled = true
        }
    }
}

generateAdditionQuestion()


// HTML elements
var progressBarElement = document.querySelector('.progress-bar')
var progressContentElement = document.querySelector('.progress-content')
var progressValueElement = document.querySelector('.progress-value')
var progressUpdateElement = document.querySelector('.progress-update')

// Declare all necessary variables
var totalQuestions = 10;
var score = 0;
var percentage = 0;

// When correct button is clicked 
progressUpdateElement.addEventListener("click", handleProgressUpdate)

function handleProgressUpdate() {
    score ++
    percentage = score / totalQuestions * 100
    if (score == totalQuestions)  {
        progressUpdateElement.disabled = true;
    }
    progressContentElement.style.width = `${percentage}%`
    progressValueElement.innerHTML = `${score} / ${totalQuestions} (${percentage}%)`
}

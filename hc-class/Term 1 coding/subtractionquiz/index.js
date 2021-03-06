


// Display the question on the screen
var questionElement = document.querySelector(".question")
var inputElement = document.querySelector(".input")
var resultElement = document.querySelector(".result")
var refreshElement= document.querySelector(".refresh")
var scoreElement= document.querySelector(".score")

var score = 0;

scoreElement.innerHTML = `Score: ${score}`;

function generateRandomNumber() {
    return Math.floor(1 + Math.random() * 9)
}
var answer;
var newQuestion;

function generateAdditionQuestion() {
    // get two random numbers (numbers have to be in between 0 and 100, numbers must be whole numbers)
    var randomNumber1 = generateRandomNumber() 
    var randomNumber2 = generateRandomNumber() 

    // Add the two random numbers 
    answer = randomNumber1 * randomNumber2

    // Generate the question for HTML
    newQuestion = `${randomNumber1} * ${randomNumber2} =`
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
            inputElement.value =""
            inputElement.disabled = true
            score ++
            scoreElement.innerHTML = `Score: ${score}`;
        }else {
            resultElement.innerHTML = "Wrong"
            resultElement.style.color = "Red"
            inputElement.value =""
            inputElement.disabled = true
            score = 0;
            scoreElement.innerHTML = `Score: ${score}`;
        }
    }
}

generateAdditionQuestion()



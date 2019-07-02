


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

function generateSubractionQuestion() {
    // get two random numbers (numbers have to be in between 0 and 100, numbers must be whole numbers)
    var randomNumber1 = generateRandomNumber() 
    var randomNumber2 = generateRandomNumber() 
    if(randomNumber1 < randomNumber2) return '' + re; {
        
    }
    


    // Add the two randome numbers 
    answer = randomNumber1 - randomNumber2

    // Generate the question for HTML
    newQuestion = `${randomNumber1} - ${randomNumber2} =`
    questionElement.innerHTML= newQuestion
}

refreshElement.addEventListener("click", handleRefreshClick)
function handleRefreshClick() {
    event.preventDefault();
    


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

function generateSubtractionQuestion() {
    // get two random numbers (numbers have to be in between 0 and 100, numbers must be whole numbers)
    var randomNumber1 = generateRandomNumber() 
    var randomNumber2 = generateRandomNumber() 
    if(randomNumber1 < randomNumber2) return '' + re; {
        
    }
    


    // Add the two randome numbers 
    answer = randomNumber1 - randomNumber2

    // Generate the question for HTML
    newQuestion = `${randomNumber1} - ${randomNumber2} =`
    questionElement.innerHTML= newQuestion
}

refreshElement.addEventListener("click", handleRefreshClick)
function handleRefreshClick() {
    event.preventDefault();
    generateSubtractionQuestion();
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

generateSubtractionQuestion()


();
    inputElement.disabled = false
    inputElement.focus()
}

// When the user presses enter, get users input first 

inputElement.addEventListener("keyup", handleInput )
// key up or key down


function handleSubtractionInput() {
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

generateSubtractionQuestion()



//  html variable declaration
var scoreDiv = document.querySelector('.score')
var questionDiv = document.querySelector('.question')
var option1TextDiv = document.querySelector('.option-1-text')
var option2TextDiv = document.querySelector('.option-2-text')
var option3TextDiv = document.querySelector('.option-3-text')
var option4TextDiv = document.querySelector('.option-4-text')
var optionDiv = document.querySelectorAll('.option')

// questions database
var database = [
    {
        question: "What is the capital city of Austria",
        option1: "Moscow",
        option2: "Vienna",
        option3: "Stockholm",
        option4: "Sydney",
        answer: "2"
    },
    {
        question: "What is 10 multiplied by 2",
        option1: "12",
        option2: "8",
        option3: "5",
        option4: "20",
        answer: "4"
    },
    {
        question: "What is bien mean in french",
        option1: "well",
        option2: "hello",
        option3: "day",
        option4: "school",
        answer: "1"
    },
    {
        question: "What is a landscape",
        option1: "Great Barrier Reef",
        option2: "Uluru",
        option3: "Coastal",
        option4: "Eiffel Tower",
        answer: "3"
    },
]
// Get random question from the database

var numberOfQuestions = database.length;

function generateRandomQuestionNumber() {
    var questionNumber = Math.floor(Math.random() * numberOfQuestions)
    return questionNumber
}

// display questions and options
score = 0;
var answer;

function displayQuestionsAndOptions() {
    var questionNumber = [generateRandomQuestionNumber()]
    var currentQuestion = database[questionNumber] 
        questionDiv.innerHTML = currentQuestion.question;
        option1TextDiv.innerHTML = currentQuestion.option1;
        option2TextDiv.innerHTML = currentQuestion.option2;
        option3TextDiv.innerHTML = currentQuestion.option3;
        option4TextDiv.innerHTML = currentQuestion.option4;
        scoreDiv.innerHTML = `Score: ${score}`;
        answer = currentQuestion.answer;
        database.splice(questionNumber, 1)
        numberOfQuestions--;
}

displayQuestionsAndOptions()

// Listen for option click
for(var i = 0; i < optionDiv.length; i++) {
    optionDiv[i].addEventListener('click', checkAnswer)
}

function checkAnswer() {
    console.log(event.target.dataset.value)
    if(event.target.dataset.value == answer) {
        score += 100;
        scoreDiv.innerHTML = `Score: ${score}`;
    } else {
        score = 0;
        scoreDiv.innerHTML = `Score: ${score}`;
    }

    if(numberOfQuestions > 0) {
        displayQuestionsAndOptions()
    } else {
        alert(`Your score is ${score}.`);
    }
}
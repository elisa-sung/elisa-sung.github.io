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
        question: "How many books are thrown out in Australia",
        option1: "1 million",
        option2: "2 million",
        option3: "5 million",
        option4: "6 million",
        answer: "3"
    },
    {
        question: "How many pens are thrown out in Australia",
        option1: "140 million",
        option2: "70 million",
        option3: "100 million",
        option4: "7 million",
        answer: "1"
    },
    {
        question: "How many times will you wear something before throwing it out",
        option1: "7 times",
        option2: "10 times",
        option3: "23 times",
        option4: "16 times",
        answer: "1"
    },
    {
        question: "How many litres of paint are thrown out in Australia",
        option1: "10 million",
        option2: "7.3 million",
        option3: "12.1 million",
        option4: "5.6 million",
        answer: "2"
    },
    {
        question: "How long do shoes take to decompose in landfill",
        option1: "1 year",
        option2: "10 years",
        option3: "100 years",
        option4: "1000 years",
        answer: "4"
    },
    {
        question: "Which country has the most electronic waste",
        option1: "China",
        option2: "America",
        option3: "England",
        option4: "Australia",
        answer: "4"
    },
    {
        question: "How many cameras are thrown out in Australia",
        option1: "20 million",
        option2: "4.5 million",
        option3: "45 million",
        option4: "2 million",
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
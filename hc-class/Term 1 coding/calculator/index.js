// getting all HTML elements using query selector
var numberButtons = document.querySelectorAll('.number')

var expressionDiv = document.querySelector('.expression')
var resultDiv = document.querySelector('.result')

var subtractionButton= document.querySelector('.subtraction')
var additionButton = document.querySelector('.addition')
var multiplicationButton = document.querySelector('.multiplication')
var divisionButton = document.querySelector('.division')

var clearButton = document.querySelector('.clear')
var openBracketButton = document.querySelector('.bracket-open')
var closedBracketButton = document.querySelector('.bracket-closed')
var decimalButton = document.querySelector('.decimal')

var deleteButton = document.querySelector('.delete')
var equalButton = document.querySelector('.equal')

// Number button click
for(var i = 0; i <numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", handleNumberButtonClick)
}

function handleNumberButtonClick() {
    console.log(event.target.innerHTML)
    var clickedNumber = event.target.innerHTML
    expressionDiv.innerHTML = expressionDiv.innerHTML + clickedNumber
}

// clear button click
clearButton.addEventListener("click", handleClearButtonClick)

function handleClearButtonClick() {
    expressionDiv.innerHTML = ""
    resultDiv.innerHTML = ""
}

// math operation button click
// addition

additionButton.addEventListener ("click", handleAdditionButtonClick)

function handleAdditionButtonClick() {
    expressionDiv.innerHTML = expressionDiv.innerHTML + "+"
}

subtractionButton.addEventListener ("click", handleSubtractionButtonClick)

function handleSubtractionButtonClick() {
    expressionDiv.innerHTML = expressionDiv.innerHTML + "-"
}

divisionButton.addEventListener ("click", handleDivisionButtonClick)

function handleDivisionButtonClick() {
    expressionDiv.innerHTML = expressionDiv.innerHTML + "÷"
}

multiplicationButton.addEventListener ("click", handleMultiplicationButtonClick)

function handleMultiplicationButtonClick() {
    expressionDiv.innerHTML = expressionDiv.innerHTML + "×"
}

decimalButton.addEventListener ("click", handleDecimalButtonClick)

function handleDecimalButtonClick() {
    expressionDiv.innerHTML = expressionDiv.innerHTML + "."
}

openBracketButton.addEventListener ("click", handleOpenBracketButtonClick)

function handleOpenBracketButtonClick() {
    expressionDiv.innerHTML = expressionDiv.innerHTML + "("
}

closedBracketButton.addEventListener ("click", handleClosedBracketButtonClick)

function handleClosedBracketButtonClick() {
    expressionDiv.innerHTML = expressionDiv.innerHTML + ")"
}

// Delete Button
deleteButton.addEventListener ("click", handleDeleteButtonClick)

function handleDeleteButtonClick() {
    expressionDiv.innerHTML = expressionDiv.innerHTML.slice(0, -1)
}

// equal button
equalButton.addEventListener ("click", handleEqualButtonClick)

function handleEqualButtonClick() {
    var expression = expressionDiv.innerHTML
    expression = expression.replace(/×/g, "*")
    expression = expression.replace(/÷/g, "/")
    var result = eval(expression)
    resultDiv.innerHTML = result
}


// var name = [1,2,3,4]
// console.log(name.length)
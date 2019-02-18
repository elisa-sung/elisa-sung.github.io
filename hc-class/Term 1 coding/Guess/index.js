// HOMEWORK
//  YOU ARE TO CREATE A GUESSING GAME OF NUMBERS WHERE THE COMPUTER REPLIES BACK "HIGHER", "LOWER", "YOU GOT IT"
// CONDITIONALS (IF, ELSE, ELSE IF)
// PROMPTS
// ALERTS


var name = prompt("What number am I thinking of", "1 - 100")
var a = 49
var b = (`${name}`) 

if (a == b) {
    alert(`YOU GOT IT!`)
} else if (a > b){
    alert(`HIGHER`)
} else {
    alert(`LOWER`)
}

var name = prompt("Try again!", "1 - 100")
var a = 49
var b = (`${name}`) 

if (a == b) {
    alert(`NICEEEE :)`)
} else if (a > b){
    alert(`HIGHER`)
} else {
    alert(`LOWER`)
}

var name = prompt("Last chance", "1 - 100")
var a = 49
var b = (`${name}`) 

if (a == b) {
    alert(`CONGRATULATIONS!`)
} else if (a > b){
    alert(`HIGHER... Too bad now`)
} else {
    alert(`LOWER... Good try`)
}



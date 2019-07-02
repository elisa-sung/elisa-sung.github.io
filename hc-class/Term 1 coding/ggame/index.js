var guessFieldInput = document.getElementById("guessField");

 var y;
             
 var guess = 1; 
 
 y = generateRandomNumber();
 console.log(y); 
 document.getElementById("submitguess").onclick = handleSubmission;
 guessFieldInput.addEventListener('keyup', handleEnterKey);
 function handleEnterKey() {
     if (event.key == "Enter") {
        handleSubmission();
     }
 }

 function handleSubmission(){  
    var x = guessFieldInput.value; 

    if(x == y) {     
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
                + guess + " GUESS "); 
        y = generateRandomNumber();
        console.log(y);
        guessFieldInput.value = "";
        guessFieldInput.focus();
    } else if(x > y) {     
        guess++; 
        alert("OOPS SORRY!! TRY A SMALLER NUMBER"); 
    } else { 
        guess++; 
        alert("OOPS SORRY!! TRY A GREATER NUMBER") 
    } 
} 

function generateRandomNumber() {
   return Math.floor(Math.random() * 100 + 1);
}
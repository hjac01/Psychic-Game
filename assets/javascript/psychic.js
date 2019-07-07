// variables
var wins = 0
var losses = 0;
var guessesLeft = 10;
var computerChoice = "";
var guesses = [];

// functions
var possibleChoices = ["a", "b", "c", "d","e"];
function generateRandomNumber() {
   var randomNumber = Math.floor(Math.random()* possibleChoices.length)
   computerChoice = possibleChoices[randomNumber]
   console.log(computerChoice)
}
function resetGame() {
    guessesLeft = 10
    losses = losses + 1
    
}

document.addEventListener('keyup', function(event) {
    var userGuess =(event.key);
    console.log(userGuess)
    guesses.push(userGuess)
    console.log(guesses)
    document.querySelector("#guesses").innerHTML = "Guesses " + guesses
if (userGuess == computerChoice) {
    wins = wins + 1
    document.querySelector("#wins").innerHTML = "Wins " + wins
    console.log("you win")
} else { 
    guessesLeft = guessesLeft - 1
    document.querySelector("#guessesLeft").innerHTML = "Guesses Remaining " + guessesLeft
    console.log(guessesLeft)
    if (guessesLeft == 0) {
    console.log("you lose")
    resetGame()
    document.querySelector("#losses").innerHTML = "Losses  " + losses
}
}
  });
generateRandomNumber()
<script type="text/javascript">
      // site responsive to user pressing key
      document.onkeydown = function(event) {
        var userGuess = event.key;
        console.log("this is user guess" + userGuess);
      };
      // //counter variables
      var wins = 0,
      var losses = 0;

      var updateGuessesLeft = function
          updateLettersToGuess
          updateGuessesSoFar
          reset

      var wordsToGuess = ["Devin", "Hannah", "Obi"];
      var userGuesses;

      // player prompt and alert for letter guesses
      function playerGuess() {
        var lettersRight = ["r", "e", "d"];
        var guessedLetters = [];
        var lettersGuess = prompt("Can you guess a letter?");
        var lettersGuessLower = lettersGuess.toLowerCase();
      }

    //   if (lettersRight.indexOf(lettersGuessLower) === -1) {
    //     alert("Wrong");
    //   } else {
    //     alert("Correct");
    //   }

      // conditional statement comparing if player wins game within 10 tries
    //   if (lettersGuess === "r" || lettersGuess === "e" || letterGuess === "d") {
    //     wins++;
    //   } else if (lettersGuess === "r") {
    //     losses++;
    //   }
      // create output for user experience

      function startGame() {
        console.log('Game Starting');
        // Randomize Array
        var randomArray = shuffle(wordsToGuess);
        console.log('Random Array: ', randomArray);
        // Select Word
        var randomWord = randomArray[0]
        console.log('Random Word: ', randomWord);
        // Establish some dashes
        // Reset Guesses
        // Need to put text on page
      }

      startGame();

      function shuffle(array) {
        var currentIndex = array.length,
          temporaryValue,
          randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }

        return array;
      }
      // 5 total functions

      //   var html =
      //       "<p>You chose: " + lettersGuess + "</p>" +

      //   document.querySelector(#game).innerhtml = html;
    </script>
  </body>
</html>

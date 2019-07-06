     
     /* variables */
      var wins = 0
      var losses = 0;

      var chosenWords = ["red", "green", "blue"];
  
      var randNum = Math.floor(Math.random()* chosenWords.length);
      var chosenWords = chosenWords[randNum];
      console.log(chosenWords)
      /* user presses key, response logged */
      document.addEventListener('keyup', function(event) {
        var userGuess = event.key;
      });

      

     
  //  variables
      var wins = 0
      var losses = 0;
      var words = ["red", "green", "blue"];
      var underScore = [];
      var randNum = Math.floor(Math.random()* words.length)
      var chosenWord = words[randNum];
      console.log(chosenWord)
      var userGuess = [];
      var correctWord = [];
      var incorrectWord = [];

    // dom manipulation
    var actualUnderScore = document.getElementsByClassName ("underScore");
    var actualRightGuess = document.getElementsByClassName ("rightGuess");
    var actualWrongGuess = document.getElementsByClassName ("wrongGuess");
  
    console.log(chosenWord)
     
    // replacing underscores with letters 
      function generateUnderScore() {
      for (var i = 0; i < word.length; i++) {
        underScore.push('_');
      }
        return underScore; 
    }
    
    console.log(generateUnderScore)
  
      
              
      // user presses key, key response logged
      document.addEventListener('keyup', function(event) {
        var userGuess =(event.key);
        console.log(userGuess)
      });

      // user guess is correct
      if(words.indexOf(userGuess)> -1) {
      // adding to 'correctword/incorrectword' array
      correctWord.push(userGuess);

      underScore[chosenWords.indexof(userGuess)] = userGuess;
       
        actualUnderScore[0].innerHTML = underScore.join(""); 
      actualRightGuess[0].innerHTML = rightGuess;
      
      // userGuess letters join together to make word if correct
      } if (underScore.join("") === chosenWord){
       
      } else { (incorrectWord.push(userGuess))
        actualWrongGuess[0].innerHTML = incorrectWord.join("");

      }
      
  // run underscore function 
      

      

     
  //  variables
      var wins = 0
      var losses = 0;

      var underScore = [];

      var chosenWords = ["red", "green", "blue"];
      var correctWord =[];
      var incorrectWord =[];
      var userGuess = [];

    // dom manipulation

    var actualUnderScore = document.getElementsByClassName ("underScore");
    var actualRightGuess = document.getElementsByClassName ("rightGuess");
  
    //   // replacing underscores with letters 
    //   var randNum = Math.floor(Math.random()* chosenWords.length);
    //   var chosenWords = chosenWords[randNum];
    //   console.log(chosenWords)

    //    for (i = 0; i < chosenWords.length; i++) {
    //     underScore = underScore.replace("_", chosenWords.charAt(i));
    // }
    //   return underScore
    
    //   var replaceletter = 0
    //             for (i = 0; i < chosenWords.length; i++)   {
    //                 replaceletter = chosenWords.indexOf(letter, replaceletter);
    //                 underScore = underScore.replace(underscore.charAt(replaceletter), word.charAt(replaceletter));
    //             }

                
              
              
      // user presses key, key response logged
      document.addEventListener('keyup', function(event) {
        var userGuess = String.fromCharCode(event.keyCode);
        console.log(userGuess)
      });

      // user guess is correct
      if(userGuess.indexOf(chosenWords)> -1) {
      // adding to 'correctword/incorrectword' array
      correctWord.push(userGuess);
      underScore[userGuess.indexof(chosenWords)] = chosenWords;
      actualUnderScore[0].innerHTML = underScore.join("");  
      actualRightGuess[0].innerHTML = rightGuess.join("");
      // userGuess letters join together to make word if correct
      if (underScore.join("") === chosenWords){
        alert("win");
      }
      console.log(underScore)  
      } else { (incorrectWord.push(userGuess))
        
      }
      actualUnderScore[0].innerHTML = generateUnderScore().join(" ");
      
  // run underscore function 
      

      

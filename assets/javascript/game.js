    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessesSoFar = [];
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var computerGuess;

    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        if (guessesSoFar.indexOf(userGuess) >=0) {
            alert("Already guessed that letter! Try another")
        }
        else {


            guessesSoFar.push(userGuess); 
            console.log(userGuess, "userGuess")
            if (guessesLeft === 9) {
                computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; 
            console.log(computerGuess, "computerGuess")
            }
            console.log (computerGuess, userGuess)
            if (userGuess == computerGuess) {
                wins++;
                guessesLeft = 9; 
                guessesSoFar = [];
            }
            else if (guessesLeft === 0){
                losses++;
                guessesLeft = 9;
                guessesSoFar = [];
            }
            else if (userGuess !== computerGuess){
                guessesLeft--;
            }  


             var html = "<h1>The Psychic Game</h1>" + 
                        "<p>Guess what letter I'm thinking of</p>" +
                        "<p>Total Wins: " + wins + 
                        "<p>Total Losses: " + losses + 
                        "<p>Guesses Left: " + guessesLeft +
                        "<p>Your Guesses so far: " + guessesSoFar 
            ;
            document.getElementById("game").innerHTML = html;
        } 
    }

        
    

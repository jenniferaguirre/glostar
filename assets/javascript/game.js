var computerGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var userGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];

var toStartText = document.getElementById("tostart-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var guessedLettersText = document.getElementById("guessedletters-text");


var computerGuess = computerGuesses[Math.floor(Math.random() * computerGuesses.length)];

document.onkeyup = function (event) {

    var userGuess = event.key;
    var userGuessLower = userGuess.toLowerCase();
    



    if (computerGuesses.indexOf(userGuess) > 0 ) {
        guessedLetters.push(userGuess);
        console.log(computerGuess);

        console.log("run")
        if (userGuess === computerGuess) {
            wins++;
            guessesLeft = 9;
                guessedLetters = [];
                winsText.textContent = "Wins : " + wins;
                computerGuess = computerGuesses[Math.floor(Math.random() * computerGuesses.length)];

        }
        else if (userGuess !== computerGuess) {
            guessesLeft--;

            toStartText.textContent = "";
            winsText.textContent = "Wins : " + wins;
            lossesText.textContent = "Losses : " + losses;
            guessesLeftText.textContent = "Guesses left :" + guessesLeft;
            guessedLettersText.textContent = "Your guesses so far: " + guessedLetters;

        };
        if (guessesLeft === 0) {
            losses++;
            alert("You didn't guessed what I'm thinking");
            var playAgain = confirm("You lost. Press OK to play again")
            if (playAgain === true) {
                guessesLeft = 9;
                guessedLetters = [];
                computerGuess = computerGuesses[Math.floor(Math.random() * computerGuesses.length)];

            }

        }

    };






};
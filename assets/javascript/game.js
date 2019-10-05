var computerGuess= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;


var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var userGuessText = document.getElementById("userguess-text");
var computerGuessText = document.getElementById("computerguess-text");
var guessesLeft = document.getElementById("guessleft-text");




document.onkeyup = function (event) {

    var userGuess = event.key;
    var userGuessLower = userGuess.toLowerCase();
    

    var computerGuess = computerGuess[Math.floor(Math.random() * computerGuess.length)];



    //this is where the choices, wins, loses and attempts left.

    // if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c")) {

    if (userGuess === computerGuess) {
        wins++;
    }
    else if (userGuess !== computerGuess) {
        guessesLeft--;
        losses++;
    }

    else if (userGuess = 0) {
        wins = 0;
        losses = 0;
        guessesLeft = 0;


    }

    winsText.textContent = "Wins : " + wins;
    lossesText.textContent = "Losses : " + losses;
    guessesLeft.textContent = "Guesses left :" + guessesLeft;
    userGuessText.textContent = "Your Guesses so far:  " + userGuess;

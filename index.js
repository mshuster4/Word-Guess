var Letter = require("./letter.js");
var Word = require("./word.js");

var inquirer = require('inquirer');

var wordsArr=[
    "akita",
    "border collie",
    "belgian malinois",
    "poodle"
];

var randomWord;
var gameWord;
var guess;
var guessesLeft = 10;

function startGame() {

    console.log("Welcome to Word Guess!");

}

function selectWord() {
    
    randomWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];
    gameWord = new Word(randomWord);
    gameWord.buildWord(gameWord);
    gameWord.checkWord();


function guessWord() {

    if (guessesLeft > 0) {

        inquirer.prompt([
            {
                name: "guess",
                message: "what is your guess?"
            }

        ]).then(function(answer) {
            
                guess = answer.guess;
                gameWord.wordGuess(guess);
                gameWord.checkWord();

                if (randomWord.toUpperCase().indexOf(guess.toUpperCase()) === -1) {

                    guessesLeft--;
                    console.log("INCORRECT! You have: " + guessesLeft + " guesses Left");
                    
                }

                else  {

                    console.log("CORRECT!");

                }


            guessWord();
            

        });

    }

    else {

       resetGame();

    }


};

function resetGame() {

    console.log("Game Over");
    
}


startGame();
selectWord();
guessWord();



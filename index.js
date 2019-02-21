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


var alreadyGuessed = [];

var guessesLeft = 10;

function startGame() {

    console.log("Welcome to Word Guess!");

}

function getNumOfSlots() {

    var numOfSpaces = 0;
    var numOfSlots = randomWord.length;

    for (var i = 0; i < randomWord.length; i++) {

        if (randomWord.charAt(i) == " ") {
            numOfSpaces++
        }

    }

    numOfSlots = numOfSlots - numOfSpaces

    return numOfSlots; 

}



function changeNumOfSlots(letter) {

    var frequency = 0

    for (var j = 0; j < randomWord.length; j++) {
        if (randomWord.charAt(j) === guess) {

            frequency++;

        }

    }

    console.log(frequency);
    return frequency;
}


function selectWord() {
    
    randomWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];
    gameWord = new Word(randomWord);
    gameWord.buildWord(gameWord);
    gameWord.checkWord();
    numOfSlots = getNumOfSlots();
    console.log(numOfSlots);

}



function guessWord() {

    if (guessesLeft > 0) {

        inquirer.prompt([
            {
                name: "guess",
                message: "what is your guess?"
            }

        ]).then(function(answer) {
            
                guess = answer.guess;
                alreadyGuessed.push(guess);
                gameWord.wordGuess(guess);
                gameWord.checkWord();


                if (randomWord.toUpperCase().indexOf(guess.toUpperCase()) === -1) {

                    guessesLeft--;
                    console.log("INCORRECT! You have: " + guessesLeft + " guesses Left");
                    
                }


                else  {

                    console.log("CORRECT!");
                    numOfSlots = numOfSlots - changeNumOfSlots(guess);

                    if (numOfSlots == 0) {

                        win();

                    }
           
                }

            console.log(numOfSlots);
            guessWord();
            

        });

    }

  else {

    endGame();

  }


}

function win() {

    console.log("You Win!");

}


function endGame() {

    console.log("Game Over");
    
}


startGame();
selectWord();


guessWord();


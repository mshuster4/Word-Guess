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

var hasWon = false; 

var alreadyGuessed = [];

var guessesLeft = 10;

function startGame() {

    console.log("Welcome to Word Guess!");
    inquirer.prompt([
        {
            type: "confrim",
            name: "startGame",
            message: "Would you like to play? Press Y or N"
        }
    ])
    .then(function(answer){
        choice = answer.startGame

        if (choice == "Y") {
            selectWord();
        }

        else {
            console.log("Come back when you're ready to play");
        }

    });


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

function hasWonYet(number) {

    if (numOfSlots <= 0) {

        hasWon = true 
        return hasWon 

    }

    else {
        hasWon = false
        return hasWon 
    }


}

function guessWord() {

    if (hasWonYet(numOfSlots) == true) {
        win(); 
    }

    else if (guessesLeft > 0 && hasWon == false) {

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
                    hasWonYet(numOfSlots);

                }

            console.log(numOfSlots);
            guessWord();
            

        });

    }

  else {

    loss();

  }


}

function selectWord() {
    
    randomWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];
    gameWord = new Word(randomWord);
    gameWord.buildWord(gameWord);
    gameWord.checkWord();
    numOfSlots = getNumOfSlots();
    console.log(numOfSlots);
    guessWord();

}

function win() {

    console.log("You Win!");
    inquirer.prompt([
        {
            type: "confrim",
            name: "playAgain",
            message: "Would you like to play again? Press Y or N"
        }
    ])
    .then(function(answer){
        choice = answer.startGame

        if (choice == "Y") {
            selectWord();
        }

        else {
            console.log("Come back when you're ready to play again.");
        }

    });

}

function loss() {

    console.log("Game Over");
    inquirer.prompt([
        {
            type: "confrim",
            name: "playAgain",
            message: "Would you like to play again? Press Y or N"
        }
    ])
    .then(function(answer){
        choice = answer.startGame

        if (choice == "Y") {
            selectWord();
        }

        else {
            console.log("Come back when you're ready to play again.");
        }
    });
}

startGame();





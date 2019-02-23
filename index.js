var Letter = require("./letter.js");
var Word = require("./word.js");

var inquirer = require('inquirer');

var wordsArr=[
    "Austria",
    "Brazil",
    "Cambodia",
    "Ethiopia",
    "South Korea",
    "Krygyzstan",
    "Malaysia",
    "Belgium",
    "Slovenia",
    "Zimbabwe",
    "Vietnam",
    "United States of America",
    "Ukraine",
    "Turkey",
    "Sri Lanka",
    "Russia",
    "Portugal",
    "New Zealand",
    "Czech Republic",
    "Azerbaijan"
];

var randomWord;
var gameWord;
var guess;

var alreadyGuessed = [];

var guessesLeft = 10;

function startGame() {

    console.log("-----------------------------------\n")
    console.log("**WORLD COUNTRIES WORD GUESS**\n");
    console.log("-----------------------------------\n")
    inquirer.prompt([
        {
            name: "startGame",
            message: "Would you like to play? (Y/N)"
        }
    ])
    .then(function(answer){
        choice = answer.startGame

        if (choice == "Y" || choice == "y") {
            selectWord();
        }

        else {
            console.log("\n");
            console.log("Come back when you're ready to play");
        }

    });


}

function selectWord() {
    
    randomWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];
    gameWord = new Word(randomWord);
    console.log("\n\n")
    gameWord.buildWord(gameWord);
    gameWord.checkWord();
    numOfSlots = getNumOfSlots();
    guessWord();

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



function changeNumOfSlots(guess) {

    var frequency = 0;

    for (var j = 0; j < randomWord.length; j++) {
        if (randomWord.charAt(j).toUpperCase() === guess) {

            frequency++;

        }

    }

    return frequency;

}

function hasWonYet(number) {

    if (number <= 0) {

        return true 
    }

    else {

        return false
    }
}


function guessWord() {

    if (hasWonYet(numOfSlots) == true) {
        win(); 
    }

    else if (guessesLeft > 0 && hasWonYet(numOfSlots) == false) {
        
        console.log("\n\n");

        inquirer.prompt([
            {
                name: "guess",
                message: "What is your guess?"
            }

        ]).then(function(answer) {

                console.log("\n\n"); 

                guess = answer.guess.toUpperCase();
                gameWord.wordGuess(guess);
                gameWord.checkWord();

                console.log("\n\n");

                if (randomWord.toUpperCase().indexOf(guess) > -1 && alreadyGuessed.indexOf(guess) === -1) {

                    console.log("CORRECT!");
                    alreadyGuessed.push(guess);
                    numOfSlots = numOfSlots - changeNumOfSlots(guess);;
                    hasWonYet(numOfSlots);

                }


                else if (randomWord.toUpperCase().indexOf(guess) === -1) {

                    guessesLeft--;
                    console.log("INCORRECT! You have: " + guessesLeft + " guesses Left");
                    
                }


            guessWord();
            

        });

    }

  else {

    loss();

  }


}

function win() {
    console.log("\n")
    console.log("********\n");
    console.log("YOU WIN!\n");
    console.log("********\n");
    inquirer.prompt([
        {
            name: "playAgain",
            message: "Would you like to play again (Y/N)?"
        }
    ])
    .then(function(answer){
        choice = answer.playAgain;

        if (choice === "Y" || choice === "y") {
            guesseLeft = 10;
            alreadyGuessed = []; 
            selectWord();
        }

        else {
            console.log("\n");
            console.log("Come back when you're ready to play again.");
        }

    });

}

function loss() {
    console.log("\n")
    console.log("**********\n");
    console.log("GAME OVER!\n");
    console.log("**********\n");
    inquirer.prompt([
        {
            name: "playAgain",
            message: "Would you like to play again (Y/N)?"
        }
    ])
    .then(function(answer){
        choice = answer.playAgain;

        if (choice === "Y" || choice === "y") {
            guessesLeft = 10;
            alreadyGuessed = [];
            selectWord();
        }

        else {
            console.log("\n")
            console.log("Come back when you're ready to play again.");
        }
    });
}

startGame();





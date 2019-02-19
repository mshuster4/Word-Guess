var Letter = require("./letter.js");

var Word = function(word) {

    this.word = word;

    this.lettersArr = []

    this.buildWord = function(word) {

        for (var i = 0; i < this.word.length; i++) {
            this.lettersArr.push(new Letter(this.word[i]));
        }

    }
    
    this.checkWord = function() {
        for (var i = 0; i < this.lettersArr.length; i++) {
           this.lettersArr[i].toString();
        }

        console.log(this.lettersArr.join(" "));

    };

    this.wordGuess = function(guess) {
        for (var i = 0; i < this.lettersArr.length; i++) {
            this.lettersArr[i].makeGuess(guess);

        }

    };

};

/*
var guess = "e"
var testWord = new Word("game");
testWord.buildWord(testWord);
testWord.wordGuess(guess);
testWord.checkWord();
*/

module.exports = Word







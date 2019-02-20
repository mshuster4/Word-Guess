var Letter = require("./letter.js");

var Word = function(word) {

    this.word = word;

    this.lettersArr = [];

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

<<<<<<< HEAD
        return this.lettersArr.join(" ");

=======
>>>>>>> a093d089ff80efd3f5141a4fccf8705fc8b27add
    };

    this.wordGuess = function(guess) {
        for (var i = 0; i < this.lettersArr.length; i++) {
            this.lettersArr[i].makeGuess(guess);

        }

    };

};

<<<<<<< HEAD
=======
/*
var guess = "e"
var testWord = new Word("game");
testWord.buildWord(testWord);
testWord.wordGuess(guess);
testWord.checkWord();
*/

>>>>>>> a093d089ff80efd3f5141a4fccf8705fc8b27add
module.exports = Word







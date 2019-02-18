
var Letter = function(letter) {
    this.letter = letter;
    this.hasGuessed = false;

    this.toString = function() {
        if (this.hasGuessed == true) {
            console.log(this.letter);
        }
        else {
            console.log("_");
        }

    };

    this.makeGuess = function(guess) {
        if (this.letter == guess) {
            this.hasGuessed = true; 
        }
    
    }

}

module.exports = Letter;

/*
var testLetter = new Letter("a");
var guess = "b"

testLetter.makeGuess(guess);
testLetter.toString();
*/



var Letter = function(letter) {
    this.letter = letter.toUpperCase();
    this.hasGuessed = false;
}

Letter.prototype.toString = function() {

    var wordString = "_";

    if (this.letter == " ") {
        wordString = " "
        return wordString;
    }

    else if (this.hasGuessed) {

        wordString = this.letter;
        return wordString;
    }
    
    return wordString;

};

Letter.prototype.makeGuess = function(guess) {

    if (this.letter == guess.toUpperCase()) {
        this.hasGuessed = true; 
    }


};

module.exports = Letter;



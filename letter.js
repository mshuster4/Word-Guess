
var Letter = function(letter) {
    this.letter = letter;
    this.hasGuessed = false;
}

Letter.prototype.toString = function() {

    var wordString = "_";

    if (this.hasGuessed) {

        wordString = this.letter;
        return wordString;
    }
    
    return wordString;

};

Letter.prototype.makeGuess = function(guess) {

    if (this.letter == guess) {
        this.hasGuessed = true; 
    }


};

module.exports = Letter;



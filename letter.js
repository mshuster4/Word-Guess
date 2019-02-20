
var Letter = function(letter) {
    this.letter = letter.toUpperCase();
    this.hasGuessed = false;
}

Letter.prototype.toString = function() {
<<<<<<< HEAD

    var wordString = "_";

    if (this.letter == " ") {
        wordString = " "
        return wordString;
    }

    else if (this.hasGuessed) {
=======

    var wordString = "_";

    if (this.hasGuessed) {
>>>>>>> a093d089ff80efd3f5141a4fccf8705fc8b27add

        wordString = this.letter;
        return wordString;
    }
    
    return wordString;

};

Letter.prototype.makeGuess = function(guess) {

<<<<<<< HEAD
    if (this.letter == guess.toUpperCase()) {
=======
    if (this.letter == guess) {
>>>>>>> a093d089ff80efd3f5141a4fccf8705fc8b27add
        this.hasGuessed = true; 
    }


};

module.exports = Letter;



var Letter = function(letter) {
    this.letter = letter;
    this.hasGuessed = false

    this.revealLetter = function() {
        if (this.hasGuessed == true) {
            console.log(this.letter)
        }
        else {
            console.log("_")
        }

    };

    this.makeGuess = function(guess) {
        if (this.letter == guess) {
            this.hasGuessed = true; 

        }
    
    }

}

var letterTest = new Letter ("b");
letterTest.makeGuess("b");
letterTest.revealLetter();

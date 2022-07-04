function HangmanGame(){

    this.run = function(){

        console.log("Hangman Game is up and running...");
    }

};

const setup = () => {

    document.onload = () => {

        window.app = new HangmanGame();
        window.app.run();
    }
};

setup();
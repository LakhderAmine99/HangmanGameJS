import { Hangman } from '../src/index.js';

function HangmanGame(){

    let choosenWord = null;

    this.run = function(){

        console.log("Hangman Game is up and running...");
    }

    function updateGame(){

        switch(Hangman.state){

            case Hangman.state.LOADING:
                console.log("Hangman game is loading...");
            break;

            case Hangman.state.PLAYING:
                playGame();
            break;

            case Hangman.state.GAMEOVER:
                endGame();
            break;
        }
    }

    function playGame(){
        return;
    }

    function endGame(){
        return;
    }

};

const setup = () => {

    document.onload = () => {

        window.app = new HangmanGame();
        window.app.run();
    }
};

setup();
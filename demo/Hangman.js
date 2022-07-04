import { Hangman } from '../src/index.js';

function HangmanGame(){

    let choosenWord = null;
    let gameScore = 0;
    let wordsToChoose = Hangman.words;

    this.run = function(){

        console.log("Hangman Game is up and running...");

        handleEventListeners();

        // updateGame();
    }

    /**
     * 
     * @param {array} words 
     * @returns 
     */
    function getRandomWord(words){

        let index = Math.floor(Math.random()*(words.length - 1));

        return {
            word:words[index],
            wordIndex:index
        };
    }

    function handleEventListeners(){

        window.addEventListener('keydown',handleAlphabetKeyDown,false);

        return;
    }

    /**
     * 
     * @param {Event} e 
     * @returns 
     */
    function handleAlphabetKeyDown(e){
        
        return;
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

    window.onload = () => {

        window.app = new HangmanGame();
        window.app.run();
    }
};

setup();
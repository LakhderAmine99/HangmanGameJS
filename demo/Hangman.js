import { Hangman } from '../src/index.js';

function HangmanGame(){

    let chosenWord = null;
    let chosenWordIndex = null;
    let gameScore = 0;
    let wordsToChoose = Hangman.words;

    this.run = function(){

        console.log("Hangman Game is up and running...");

        initGame();

        handleEventListeners();

        updateGame();
    }

    function initGame(){

        [chosenWord,chosenWordIndex] = getRandomWord(wordsToChoose);

        return;
    }

    /**
     * 
     * @param {array} words 
     * @returns 
     */
    function getRandomWord(words){

        let index = Math.floor(Math.random()*(words.length - 1));

        return [words[index],index];
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

        switch(Hangman.state.CURRENT_STATE){

            case Hangman.state.LOADING:
                console.log("Hangman game is loading...");
                Hangman.state.CURRENT_STATE = Hangman.state.PLAYING;
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
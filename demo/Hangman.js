import { Hangman } from '../src/index.js';

function HangmanGame(){

    /**
     * @type {string} chosenWord
     */
    let chosenWord = null;

    /**
     * @type {number} chosenWordIndex
     */
    let chosenWordIndex = null;

    /**
     * @type {number} gameScore
     */
    let gameScore = 0;

    /**
     * @type {string[]} wordsToChoose
     */
    let wordsToChoose = Hangman.words;

    /**
     * @type {Hangman.Interacte} interacte
     */
    let interacte = null;

    this.run = function(){

        console.log("Hangman Game is up and running...");

        initGame();

        handleEventListeners();

        updateGame();
    }

    /**
     * 
     * @returns 
     */
    function initGame(){

        [chosenWord,chosenWordIndex] = getRandomWord(wordsToChoose);

        interacte = new Hangman.Interacte(chosenWord);

        interacte.createAllAlphaBoxs();

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

    /**
     * 
     * @returns 
     */
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

        if(chosenWord.includes((e.key).toLowerCase())){

            interacte.fillBox((e.key).toUpperCase(),chosenWord.indexOf(e.key));
            chosenWord = chosenWord.replace(e.key,'#');
        }
        
        return;
    }

    /**
     * 
     */
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

    /**
     * 
     * @returns 
     */
    function playGame(){
        return;
    }

    /**
     * 
     * @returns 
     */
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
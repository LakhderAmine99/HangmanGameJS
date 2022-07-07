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

    /**
     * @type {number} filledBoxs
     */
    let filledBoxs = 0;

    this.run = function(){

        console.log("Hangman Game is up and running...");

        initGame();

        handleEventListeners();

        updateGame();
    }

    /**
     * 
     * 
     */
    function initGame(){

        [chosenWord,chosenWordIndex] = getRandomWord(wordsToChoose);

        interacte = new Hangman.Interacte(chosenWord);

        interacte.createAlphaBoxs();
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
     *
     */
    function handleEventListeners(){

        window.addEventListener('keydown',handleAlphabetKeyDown,false);
    }

    /**
     * 
     * @param {Event} e
     * @returns 
     */
    function handleAlphabetKeyDown(e){

        if(e.key.match('[A-z]')){

            if(chosenWord.includes((e.key).toLowerCase())){

                interacte.fillBox((e.key).toUpperCase(),chosenWord.indexOf(e.key));
                chosenWord = chosenWord.replace(e.key,'#');

                filledBoxs++;

                if(filledBoxs === chosenWord.length){

                    if(interacte.getUsedPiecesCount() !== 0){

                        interacte.removeHangmanLastPiece();
                    }

                    // interacte.fadeInMessage(4000,chosenWord);
                    interacte.updateScore(updateGameScore());

                    if(wordsToChoose.length - 1 === 0){

                        Hangman.state.CURRENT_STATE = Hangman.state.GAMEOVER;
                        updateGame();
                        return;
                    }
    
                    filledBoxs = 0;
                        
                    wordsToChoose.splice(chosenWordIndex,1);
                        
                    [chosenWord,chosenWordIndex] = getRandomWord(wordsToChoose);

                    interacte.clearBoxs();
                    interacte.setWord(chosenWord);                
                    interacte.createAlphaBoxs();
                }

            }else{

                interacte.drawHangman(interacte.nextPiece());

                if(interacte.getLeftedPiecesCount() === 0){

                    Hangman.state.CURRENT_STATE = Hangman.state.GAMEOVER;
                    updateGame();
                    return;
                }
            }
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
            break;

            case Hangman.state.GAMEOVER:
                endGame();
            break;
        }
    }

    /**
     * 
     * @returns Hangman current score.
     */
    function updateGameScore(){
        return Hangman.score += 10;
    }

    /**
     * 
     * 
     */
    function endGame(){

        interacte.clearBoxs();

        if(interacte.getLeftedPiecesCount() === 0){
            
            interacte.fadeInMessage(4000,"Game Over");
            
            window.setTimeout(()=>{

                initGame();
                
            },4000);
        }

    }

};

const setup = () => {

    window.onload = () => {

        window.app = new HangmanGame();
        window.app.run();
    }
};

setup();
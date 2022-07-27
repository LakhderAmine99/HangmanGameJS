/**
 * @class
 * @module
 */
export class Interacte {

    /**
     * @type {string} #word
     */
    #word = null;

    /**
     * @type {array} #alphaBoxs
     */
    #alphaBoxs = [];

    /**
     * @type {array} #hangManPieces
     */
    #hangManPieces = [];

    /**
     * @type {array} #hangManPiecesBackUp
     */
    #hangManPiecesBackUp = [];

    /**
     * 
     * @param {string} word 
     */
    constructor(word){
        this.#word = word || null;

        this.#hangManPieces = [
            "bar",
            "rope",
            "head",
            "body",
            "lefthand",
            "righthand",
            "leftfoot",
            "rightfoot"
        ];
    }

    /**
     * 
     * @param {number} id 
     */
    createAlphaBox(id){

        let boxElement = document.createElement('div');

        boxElement.classList.add('alpha-box-template');
        boxElement.id = id;

        document.querySelector('.user-interactions-panel').appendChild(boxElement);

        this.#alphaBoxs.push(boxElement);
    }
    
    /**
     * 
     */
    createAlphaBoxs(){

        document.querySelector('.game-chances').innerHTML = "Chances Left : "+ this.#hangManPieces.length;
        
        for(let i=0; i<this.#word.length; i++){
            
            this.createAlphaBox(i);
        }
    }

    /**
     * 
     * @param {string} alpha 
     * @param {number} boxIndex 
     */
    fillBox(alpha,boxIndex){

        this.#alphaBoxs[boxIndex].innerHTML = alpha;
    }

    /**
     * 
     */
    clearBoxs(){
        
        this.#alphaBoxs = [];
        document.querySelector('.user-interactions-panel').innerHTML = "";
    }

    /**
     * 
     * @param {number} score 
     */
    updateState(score){
        document.querySelector('.game-score').innerHTML = "Score : "+score;
        document.querySelector('.game-chances').innerHTML = "Chances Left : "+ this.#hangManPieces.length;
    }

    /**
     * 
     * @returns {string} The next hangman piece.
     */
    nextPiece(){

        let piece = this.#hangManPieces.shift();

        this.#hangManPiecesBackUp.push(piece);

        return piece;
    }

    /**
     * 
     * @param {string} piece 
     */
    drawHangman(piece){

        if(piece !== undefined){

            document.querySelector('.game-chances').innerHTML = "Chances Left : "+ this.#hangManPieces.length;
            document.querySelector('.'+piece).classList.remove('hide');
        }
    }

    /**
     * 
     */
    hideHangmanLastPiece(){

        let piece = this.#hangManPiecesBackUp.pop();
        this.#hangManPieces.unshift(piece);

        document.querySelector('.game-chances').innerHTML = "Chances Left : "+ this.#hangManPieces.length;
        document.querySelector('.'+piece).classList.add('hide');
    }

    /**
     * 
     */
    hideHangman(){

        this.#hangManPieces.forEach(piece => {
            
            document.querySelector('.'+piece).classList.add('hide');
        });
    }

    /**
     * 
     * @returns 
     */
    getUsedPiecesCount(){

        return this.#hangManPiecesBackUp.length;
    }

    /**
     * 
     * @returns 
     */
    getLeftedPiecesCount(){

        return this.#hangManPieces.length;
    }

    /**
     * 
     * @param {number} milliseconds 
     * @param {string} message 
     */
    fadeInMessage(milliseconds,message){

        document.querySelector('.game-message').innerHTML = message;
        document.querySelector('.game-message').style.display = "block";

        window.setTimeout(()=>{

            document.querySelector('.game-message').classList.add('fadeIn');

        },800);

        window.setTimeout(()=>{

            document.querySelector('.game-message').classList.remove('fadeIn');

        },1600);

        window.setTimeout(()=>{

            document.querySelector('.game-message').style.display = "none";

        },milliseconds);

    }

    /**
     * 
     */
    constructHangman(){

        this.#hangManPieces = this.#hangManPiecesBackUp;
        this.#hangManPiecesBackUp = [];
    }

    /**
     * 
     * @param {string} word 
     */
    setWord(word){
        this.#word = word;
    }

    /**
     * 
     * @returns {string} The hangman word.
     */
    getWord(){
        return this.#word;
    }
};
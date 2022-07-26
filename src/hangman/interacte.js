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

    createAlphaBox(id){

        let boxElement = document.createElement('div');

        boxElement.classList.add('alpha-box-template');
        boxElement.id = id;

        document.querySelector('.user-interactions-panel').appendChild(boxElement);

        this.#alphaBoxs.push(boxElement);
    }
    
    createAlphaBoxs(){

        document.querySelector('.game-chances').innerHTML = "Chances Left : "+ this.#hangManPieces.length;
        
        for(let i=0; i<this.#word.length; i++){
            
            this.createAlphaBox(i);
        }
    }

    fillBox(alpha,boxIndex){

        this.#alphaBoxs[boxIndex].innerHTML = alpha;
    }

    clearBoxs(){
        
        this.#alphaBoxs = [];
        document.querySelector('.user-interactions-panel').innerHTML = "";
    }

    updateScore(score){
        document.querySelector('.game-score').innerHTML = "Score : "+score;
        document.querySelector('.game-chances').innerHTML = "Chances Left : "+ this.#hangManPieces.length;
    }

    nextPiece(){

        let piece = this.#hangManPieces.shift();

        this.#hangManPiecesBackUp.push(piece);

        return piece;
    }

    drawHangman(piece){

        if(piece !== undefined){

            document.querySelector('.game-chances').innerHTML = "Chances Left : "+ this.#hangManPieces.length;
            document.querySelector('.'+piece).classList.remove('hide');
        }
    }

    hideHangmanLastPiece(){

        let piece = this.#hangManPiecesBackUp.pop();
        this.#hangManPieces.unshift(piece);

        document.querySelector('.game-chances').innerHTML = "Chances Left : "+ this.#hangManPieces.length;
        document.querySelector('.'+piece).classList.add('hide');
    }

    hideHangman(){

        this.#hangManPieces.forEach(piece => {
            
            document.querySelector('.'+piece).classList.add('hide');
        });
    }

    getUsedPiecesCount(){

        return this.#hangManPiecesBackUp.length;
    }

    getLeftedPiecesCount(){

        return this.#hangManPieces.length;
    }

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

    constructHangman(){

        this.#hangManPieces = this.#hangManPiecesBackUp;
        this.#hangManPiecesBackUp = [];
    }

    setWord(word){
        this.#word = word;
    }

    getWord(){
        return this.#word;
    }
};
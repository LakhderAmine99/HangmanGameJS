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
        this.#word = word;

        this.#hangManPieces = [
            "bar",
            "rope",
            "head",
            "body",
            "lefthand",
            "righthand",
            "leftfoot",
            "rightfoot"
        ]
    }

    createAlphaBox(id){

        let boxElement = document.createElement('div');

        boxElement.classList.add('alpha-box-template');
        boxElement.id = id;

        document.querySelector('.user-interactions-panel').appendChild(boxElement);

        this.#alphaBoxs.push(boxElement);

        return true;
    }

    createAlphaBoxs(){

        for(let i=0; i<this.#word.length; i++){

            this.createAlphaBox(i);
        }
    }

    fillBox(alpha,boxIndex){

        this.#alphaBoxs[boxIndex].innerHTML = alpha;
    }

    clearBoxs(){

        this.#alphaBoxs.forEach(box => {
            
            box.innerHTML = "";
        });

        this.#alphaBoxs = [];
        document.querySelector('.user-interactions-panel').innerHTML = "";
    }

    updateScore(score){
        document.querySelector('.game-score').innerHTML = "Score : "+score;
    }

    nextPiece(){

        let piece = this.#hangManPieces.shift();

        this.#hangManPiecesBackUp.push(piece);

        return piece;
    }

    drawHangman(piece){

        if(piece !== undefined){

            document.querySelector('.'+piece).classList.add('visible');
        }
    }

    removeHangmanLastPiece(){

        this.#hangManPieces.unshift(this.#hangManPiecesBackUp.pop());
    }

    hideHangman(){

        this.#hangManPieces.forEach(piece => {

            document.querySelector('.'+piece).classList.remove('visible');
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

        },milliseconds);

        window.setTimeout(()=>{

            document.querySelector('.game-message').style.display = "none";

        },milliseconds);

    }

    setWord(word){
        this.#word = word;
    }

    getWord(){
        return this.#word;
    }
};
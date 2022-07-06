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
     * 
     * @param {string} word 
     */
    constructor(word){
        this.#word = word;
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

        return this.#hangManPieces.shift();
    }

    drawHangman(piece){

        if(piece !== undefined){

            document.querySelector('.'+piece).classList.add('visible');
        }
    }

    hideHangman(){

        this.#hangManPieces.forEach(piece => {

            document.querySelector('.'+piece).classList.remove('visible');
        });
    }

    setWord(word){
        this.#word = word;
    }

    getWord(){
        return this.#word;
    }
};
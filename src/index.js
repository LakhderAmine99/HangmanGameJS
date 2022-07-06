import {words} from './hangman/words.js';
import {Interacte} from './hangman/interacte.js';

/**
 * @type {Object}
 * @description game state object
 */
const state = {
    LOADING:1,
    GAMEOVER:2
}

state.CURRENT_STATE = state.LOADING;

/**
 * @namespace
 */
export const Hangman = {
    words:words,
    state:state,
    Interacte:Interacte,
    score:0
}
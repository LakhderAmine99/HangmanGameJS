import {words} from './hangman/words.js';
import {Interacte} from './hangman/interacte.js';

/**
 * @type {Object}
 * @description game state object
 */
const state = {
    LOADING:1,
    PLAYING:2,
    GAMEOVER:3
}

state.CURRENT_STATE = state.LOADING;

/**
 * @namespace
 */
export const Hangman = {
    words:words,
    state:state,
    Interacte:Interacte
}
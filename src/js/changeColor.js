"use strict"

import colors from '../colors.json'
import {randomIntegerFromInterval} from './random-generator.js';

const colorsStack = Array.from(colors);
const COLOR_SWITCH_DELAY = 1000;
let currentColorId = null;

const refs = {
  startBtn:  document.querySelector('[data-action="start"]'),
  stopBtn:   document.querySelector('[data-action="stop"]'),
  bodyField: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', timerSet);
refs.stopBtn.addEventListener('click', timerStop);

function timerSet() {
  refs.startBtn.disabled = true;
  currentColorId = setInterval( 
    () => {refs.bodyField.style.backgroundColor = colorsStack[randomIntegerFromInterval(0, colorsStack.length)]},
    COLOR_SWITCH_DELAY
  );
};

function timerStop(){
  refs.startBtn.disabled = false;
  clearInterval(currentColorId);
};

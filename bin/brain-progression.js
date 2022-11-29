#!/usr/bin/env node
import commonRule from '../src/index.js';

const progressionGame = () => {
  const progressionQuestion = 'What number is missing in the progression?';
  const progression = () => {
    const firstNumber = Math.floor(Math.random() * 10) + 1;
    const step = Math.floor(Math.random() * 10) + 1;
    const array = [firstNumber];
    for (let i = 0; i < 10; i += 1) {
      array.push(array[i] + step);
    }
    const space = Math.floor(Math.random() * 10);
    const hiddenNumber = array[space];
    array[space] = '..';
    return [array.join(' '), hiddenNumber.toString()];
  };
  commonRule(progressionQuestion, progression);
};
progressionGame();

#!/usr/bin/env node
import commonRule from '../src/index.js';

const evenNumberGame = () => {
  const evenNumberQuestion = 'Answer "yes" if the number is even, otherwise answer "no"';

  const evenOrNot = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let answer;
    if (randomNumber % 2 === 0) {
      answer = 'yes';
    } else {
      answer = 'no';
    }
    return [randomNumber, answer];
  };
  commonRule(evenNumberQuestion, evenOrNot);
};
evenNumberGame();

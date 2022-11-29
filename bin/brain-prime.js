#!/usr/bin/env node
import commonRule from '../src/index.js';

const primeNumberGame = () => {
  const primeNumberQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no"';

  const primeOrNot = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let answer;
    for (let i = 2; i < randomNumber; i += 1) {
      if (randomNumber % i === 0 || randomNumber === 1) {
        answer = 'no';
        break;
      } else {
        answer = 'yes';
      }
    }
    return [randomNumber, answer];
  };
  commonRule(primeNumberQuestion, primeOrNot);
};
primeNumberGame();

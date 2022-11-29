#!/usr/bin/env node
import commonRule from '../src/index.js';

const calcGame = () => {
  const calcQuestion = 'What is the result of the expression?';
  const calc = () => {
    const number1 = Math.floor(Math.random() * 100) + 1;
    const number2 = Math.floor(Math.random() * 10) + 1;
    const symbols = ['+', '-', '*'];
    const symbol = symbols[Math.floor(Math.random() * 3)];
    const question = `${number1} ${symbol} ${number2}`;
    let answer;
    if (symbol === '+') {
      answer = number1 + number2;
    } else if (symbol === '-') {
      answer = number1 - number2;
    } else if (symbol === '*') {
      answer = number1 * number2;
    }
    return [question, answer.toString()];
  };
  commonRule(calcQuestion, calc);
};
calcGame();

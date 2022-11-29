#!/usr/bin/env node
import commonRule from '../src/index.js';

const gcdGame = () => {
  const gcdQuestion = 'Find the greatest common divisor of given numbers';

  const gcd = () => {
    const number1 = Math.floor(Math.random() * 100) + 1;
    const number2 = Math.floor(Math.random() * 100) + 1;
    const twoNumbers = `${number1} ${number2}`;
    let greatestNumber;
    let leastNumber;
    if (number1 > number2) {
      greatestNumber = number1;
      leastNumber = number2;
    } else {
      greatestNumber = number2;
      leastNumber = number1;
    }
    const divisors = [];
    for (let i = leastNumber; i > 0; i -= 1) {
      if (leastNumber % i === 0) {
        divisors.push(i);
      }
    }
    let greatestDivisor;
    for (let i = 0; i < divisors.length; i += 1) {
      if (greatestNumber % divisors[i] === 0) {
        greatestDivisor = divisors[i];
        break;
      }
    }
    return [twoNumbers, greatestDivisor.toString()];
  };
  commonRule(gcdQuestion, gcd);
};
gcdGame();

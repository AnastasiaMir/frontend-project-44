import runEngine from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const gcd = (number1, number2) => {
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
  return greatestDivisor;
};

const generateRound = () => {
  const number1 = getRandomInRange(1, 100);
  const number2 = getRandomInRange(1, 100);
  const question = `${number1} ${number2}`;
  const answer = gcd(number1, number2).toString();

  return [question, answer];
};

export default () => { const rules = 'Find the greatest common divisor of given numbers'; runEngine(rules, generateRound); };

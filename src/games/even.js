import runEngine from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const generateRound = () => {
  const randomNumber = getRandomInRange(1, 100);
  const answer = isEven(randomNumber);
  return [randomNumber, answer];
};

export default () => { const rules = 'Answer "yes" if the number is even, otherwise answer "no"'; runEngine(rules, generateRound); };

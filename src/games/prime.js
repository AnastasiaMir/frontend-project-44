import runEngine from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0 || number === 1) {
      return 'no';
    }
  }
  return 'yes';
};

const generateRound = () => {
  const randomNumber = getRandomInRange(1, 100);
  const answer = isPrime(randomNumber);

  return [randomNumber, answer];
};

export default () => { const rules = 'Answer "yes" if given number is prime. Otherwise answer "no"'; runEngine(rules, generateRound); };

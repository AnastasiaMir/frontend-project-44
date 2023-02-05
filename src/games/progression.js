import runEngine from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const progression = () => {
  const firstNumber = getRandomInRange(1, 10);
  const step = getRandomInRange(1, 10);
  const array = [firstNumber];
  for (let i = 0; i < 10; i += 1) {
    array.push(array[i] + step);
  }
  const space = getRandomInRange(1, 10);
  const hiddenNumber = array[space];
  array[space] = '..';
  return [array.join(' '), hiddenNumber.toString()];
};

const generateRound = () => progression();

export default () => { const rules = 'What number is missing in the progression?'; runEngine(rules, generateRound); };

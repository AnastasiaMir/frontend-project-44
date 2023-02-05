import runEngine from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error(`Operator ${operator} - is invalid`);
  }
};

const generateRound = () => {
  const num1 = getRandomInRange(0, 100);
  const num2 = getRandomInRange(0, 100);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomInRange(0, operators.length - 1)];
  const question = `${num1} ${randomOperator} ${num2}`;
  const answer = String(calculation(num1, num2, randomOperator));

  return [question, answer];
};

export default () => { const rules = 'What is the result of the expression?'; runEngine(rules, generateRound); };

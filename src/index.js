import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
const commonRule = (task, typeOfGame) => {
  console.log(task);
  for (let i = 3; i > 0; i -= 1) {
    const answerAndQuestion = typeOfGame();
    console.log(`Question: ${answerAndQuestion[0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = answerAndQuestion[1];
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default commonRule;

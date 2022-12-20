import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const evenGame = () => {
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswers = 0;

  for (let i = 0; i <= 2; i += 1) {
    const questionForUser = getRandomNumber(1, 100);
    console.log(`Question: ${questionForUser}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (questionForUser % 2 === 0) {
      if (userAnswer === 'yes') {
        correctAnswers += 1;
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
      }
    } else if (questionForUser % 2 !== 0) {
      if (userAnswer === 'no') {
        correctAnswers += 1;
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
      }
    }
  }

  if (correctAnswers >= 2) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log('Sorry, you lose :(');
  }
};

export default evenGame;

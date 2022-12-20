import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const primeGame = () => {
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let correctAnswers = 0;

  for (let i = 0; i <= 2; i += 1) {
    const questionForUser = getRandomNumber(1, 100);
    let correctAnswer = 'yes';

    if (questionForUser === 1) {
      correctAnswer = 'yes';
    } else if (questionForUser > 1) {
      for (let n = 2; n < questionForUser; n += 1) {
        if (questionForUser % n === 0) {
          correctAnswer = 'no';
          break;
        }
      }
    }

    console.log(`Question: ${questionForUser}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
  }

  if (correctAnswers >= 2) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log('Sorry, you lose :(');
  }
};

export default primeGame;

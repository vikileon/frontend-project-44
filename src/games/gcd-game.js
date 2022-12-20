import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const gcdGame = () => {
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);

  console.log('Find the greatest common divisor of given numbers.');
  let correctAnswers = 0;
  let questionForUser;

  for (let i = 0; i <= 2; i += 1) {
    const firstNumber = getRandomNumber(1, 100);
    const secondNumber = getRandomNumber(1, 100);

    questionForUser = `Question: ${firstNumber} ${secondNumber}`;
    let nod;
    let a = firstNumber;
    let b = secondNumber;

    if (a === b) {
      nod = a;
    } else {
      while (a !== b) {
        if (a > b) {
          a -= b;
        } else {
          const k = a;
          a = b;
          b = k;
          a -= b;
        }
        nod = a;
      }
    }

    console.log(`Question: ${questionForUser}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = String(nod);

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

export default gcdGame;

import getRandomNumber from '../getRandomNumber.js';
import gameLogic from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcdData = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);

  const questionForUser = `${firstNumber} ${secondNumber}`;

  let gcd;
  let a = firstNumber;
  let b = secondNumber;

  if (a === b) {
    gcd = a;
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
      gcd = a;
    }
  }
  const correctAnswer = String(gcd);

  return [questionForUser, correctAnswer];
};

const gcdGame = () => {
  gameLogic(gameDescription, gcdData);
};

export default gcdGame;

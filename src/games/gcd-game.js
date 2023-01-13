import getRandomNumber from '../getRandomNumber.js';
import gameLogic from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }

  let gcd;
  let a = num1;
  let b = num2;

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

  return gcd;
};

const gcdData = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const correctAnswer = String(findGcd(num1, num2));
  const questionForUser = `${num1} ${num2}`;

  return [questionForUser, correctAnswer];
};

const gcdGame = () => {
  gameLogic(gameDescription, gcdData);
};

export default gcdGame;

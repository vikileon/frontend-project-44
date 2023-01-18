import getRandomNumber from '../getRandomNumber.js';
import gameLogic from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }

  return getGcd(num2 % num1, num1);
};

const makeRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const correctAnswer = String(getGcd(num1, num2));
  const questionForUser = `${num1} ${num2}`;

  return [questionForUser, correctAnswer];
};

const runGcdGame = () => {
  gameLogic(gameDescription, makeRound);
};

export default runGcdGame;

import getRandomNumber from '../getRandomNumber.js';
import gameLogic from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const makeRound = () => {
  const questionForUser = getRandomNumber(1, 100);
  const correctAnswer = isEven(questionForUser) ? 'yes' : 'no';

  return [questionForUser, correctAnswer];
};

const runEvenGame = () => {
  gameLogic(gameDescription, makeRound);
};

export default runEvenGame;

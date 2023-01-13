import getRandomNumber from '../getRandomNumber.js';
import gameLogic from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  const result = (num % 2 === 0) ? 'yes' : 'no';
  return result;
};

const evenData = () => {
  const questionForUser = getRandomNumber(1, 100);
  const correctAnswer = isEven(questionForUser);

  return [questionForUser, correctAnswer];
};

const evenGame = () => {
  gameLogic(gameDescription, evenData);
};

export default evenGame;

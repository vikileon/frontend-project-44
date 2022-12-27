import getRandomNumber from '../getRandomNumber.js';
import gameLogic from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenData = () => {
  const questionForUser = getRandomNumber(1, 100);
  let correctAnswer;
  if (questionForUser % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return [questionForUser, correctAnswer];
};

const evenGame = () => {
  gameLogic(gameDescription, evenData);
};

export default evenGame;

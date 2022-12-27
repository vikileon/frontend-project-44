import getRandomNumber from '../getRandomNumber.js';
import gameLogic from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeData = () => {
  const questionForUser = getRandomNumber(1, 100);
  let correctAnswer = 'yes';

  if (questionForUser === 1) {
    correctAnswer = 'yes';
  } else {
    for (let n = 2; n < questionForUser; n += 1) {
      if (questionForUser % n === 0) {
        correctAnswer = 'no';
        break;
      }
    }
  }
  return [questionForUser, correctAnswer];
};

const primeGame = () => {
  gameLogic(gameDescription, primeData);
};

export default primeGame;

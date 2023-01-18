import getRandomNumber from '../getRandomNumber.js';
import gameLogic from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) {
    return 'no';
  }

  for (let n = 2; n < num / 2; n += 1) {
    if (num % n === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const makeRound = () => {
  const questionForUser = getRandomNumber(1, 100);
  const correctAnswer = isPrime(questionForUser);

  return [questionForUser, correctAnswer];
};

const runPrimeGame = () => {
  gameLogic(gameDescription, makeRound);
};

export default runPrimeGame;

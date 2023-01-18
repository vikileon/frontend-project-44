import getRandomNumber from '../getRandomNumber.js';
import gameLogic from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const makeProgression = (firstNumber, difference, length) => {
  const progression = [firstNumber];

  for (let i = 1; i < length; i += 1) {
    const nextNumber = progression[i - 1] + difference;
    progression.push(nextNumber);
  }

  return progression;
};

const makeRound = () => {
  const firstNumber = getRandomNumber(1, 10);
  const progressionDifference = getRandomNumber(1, 10);
  const progressionLength = getRandomNumber(5, 10);
  const progression = makeProgression(firstNumber, progressionDifference, progressionLength);

  const position = getRandomNumber(1, progression.length - 1);
  const missingNumber = progression[position];
  progression[position] = '..';
  const questionForUser = progression.join(' ');

  const correctAnswer = String(missingNumber);

  return [questionForUser, correctAnswer];
};

const runProgressionGame = () => {
  gameLogic(gameDescription, makeRound);
};

export default runProgressionGame;

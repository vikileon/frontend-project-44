import getRandomNumber from '../getRandomNumber.js';
import makeProgression from '../makeProgression.js';
import gameLogic from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const progressionData = () => {
  const newProgression = makeProgression();
  const position = getRandomNumber(1, newProgression.length - 1);
  const missingNumber = newProgression[position];
  newProgression[position] = '..';
  const questionForUser = newProgression.join(' ');

  const correctAnswer = String(missingNumber);

  return [questionForUser, correctAnswer];
};

const progressionGame = () => {
  gameLogic(gameDescription, progressionData);
};

export default progressionGame;

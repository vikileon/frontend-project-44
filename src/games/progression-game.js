import getRandomNumber from '../getRandomNumber.js';
import gameLogic from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const makeProgression = () => {
  const firstNumber = getRandomNumber(1, 10);
  const difference = getRandomNumber(1, 10);
  const progression = [firstNumber];
  const progressionLength = getRandomNumber(5, 10);
  let nextNumber;

  for (let i = 1; i < progressionLength; i += 1) {
    nextNumber = progression[i - 1] + difference;
    progression.push(nextNumber);
  }

  return progression;
};

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

import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';
import makeProgression from '../makeProgression.js';

const progressionGame = () => {
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);

  console.log('What number is missing in the progression?');
  let correctAnswers = 0;

  for (let i = 0; i <= 2; i += 1) {
    const newProgression = makeProgression();
    const position = getRandomNumber(1, newProgression.length - 1);
    const missingNumber = newProgression[position];
    newProgression[position] = '..';
    const questionForUser = newProgression;

    const correctAnswer = String(missingNumber);
    console.log(`Question: ${questionForUser}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
  }

  if (correctAnswers >= 2) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log('Sorry, you lose :(');
  }
};

export default progressionGame;

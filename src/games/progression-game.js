import readlineSync from 'readline-sync';
import { makeProgression } from '../index.js';

// eslint-disable-next-line import/prefer-default-export
export function progressionGame() {
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);

  console.log('What number is missing in the progression??');
  let correctAnswers = 0;
  for (let i = 0; i <= 2; i += 1) {
    const newProgression = makeProgression();
    const position = Math.round(Math.random() * ((newProgression.length - 1) - 1) + 1);
    const missingNumber = newProgression[position];
    newProgression[position] = '..';
    const yourAnswer = readlineSync.question(`Question: ${newProgression} \nYour answer: `);

    if (Number(yourAnswer) === missingNumber) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${missingNumber}'.\nLet's try again, ${userName}!`);
    }
  }

  if (correctAnswers >= 2) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log('Sorry, you lose :(');
  }
}

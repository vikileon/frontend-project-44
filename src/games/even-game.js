import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export function isEven() {
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswers = 0;

  for (let i = 0; i <= 2; i += 1) {
    const randomNumber = Math.round(Math.random() * (100 - 1) + 1);
    const yourAnswer = readlineSync.question(`Question: ${randomNumber} \nYour answer: `);

    if (randomNumber % 2 === 0) {
      if (yourAnswer === 'yes') {
        correctAnswers += 1;
        console.log('Correct!');
      } else {
        console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
      }
    } else if (randomNumber % 2 !== 0) {
      if (yourAnswer === 'no') {
        correctAnswers += 1;
        console.log('Correct!');
      } else {
        console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
      }
    }
  }

  if (correctAnswers >= 2) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log('Sorry, you lose :(');
  }
}

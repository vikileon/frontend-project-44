import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export function primeGame() {
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let correctAnswers = 0;

  for (let i = 0; i <= 2; i += 1) {
    const randomNumber = Math.round(Math.random() * (100 - 1) + 1);
    let result = 'yes';

    if (randomNumber === 1) {
      result = 'yes';
    } else if (randomNumber > 1) {
      for (let n = 2; n < randomNumber; n += 1) {
        if (randomNumber % n === 0) {
          result = 'no';
          break;
        }
      }
    }
    const yourAnswer = readlineSync.question(`Question: ${randomNumber} \nYour answer: `);

    if (yourAnswer === result) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`);
    }
  }

  if (correctAnswers >= 2) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log('Sorry, you lose :(');
  }
}

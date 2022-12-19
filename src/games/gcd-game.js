import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export function gcdGame() {
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);

  console.log('Find the greatest common divisor of given numbers.');
  let correctAnswers = 0;
  let questionForUser;

  for (let i = 0; i <= 2; i += 1) {
    const firstNumber = Math.round(Math.random() * (100 - 1) + 1);
    const secondNumber = Math.round(Math.random() * (100 - 1) + 1);

    questionForUser = `Question: ${firstNumber} ${secondNumber}`;
    let nod;
    let a = firstNumber;
    let b = secondNumber;

    if (a === b) {
      nod = a;
    } else {
      while (a !== b) {
        if (a > b) {
          a -= b;
        } else {
          const k = a;
          a = b;
          b = k;
          a -= b;
        }
        nod = a;
      }
    }

    const yourAnswer = readlineSync.question(`Question: ${questionForUser} \nYour answer: `);
    if (Number(yourAnswer) === nod) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${nod}'.\nLet's try again, ${userName}!`);
    }
  }

  if (correctAnswers >= 2) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log('Sorry, you lose :(');
  }
}

import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const calcGame = () => {
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);

  console.log('What is the result of the expression?');
  let correctAnswers = 0;
  const operators = ['+', '-', '*'];
  let result;
  let questionForUser;

  for (let i = 0; i <= 2; i += 1) {
    const firstNumber = getRandomNumber(1, 20);
    const secondNumber = getRandomNumber(1, 20);
    const operatorNumber = getRandomNumber(0, operators.length);
    const operator = operators[operatorNumber];

    switch (operator) {
      case '-':
        result = firstNumber - secondNumber;
        questionForUser = `${firstNumber} - ${secondNumber}`;
        break;
      case '*':
        result = firstNumber * secondNumber;
        questionForUser = `${firstNumber} * ${secondNumber}`;
        break;
      default:
        result = firstNumber + secondNumber;
        questionForUser = `${firstNumber} + ${secondNumber}`;
    }
    console.log(`Question: ${questionForUser}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === result) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`);
    }
  }

  if (correctAnswers >= 2) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log('Sorry, you lose :(');
  }
};

export default calcGame;

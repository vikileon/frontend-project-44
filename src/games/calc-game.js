import getRandomNumber from '../getRandomNumber.js';
import gameLogic from '../index.js';

const gameDescription = 'What is the result of the expression?';

const calcData = () => {
  const operators = ['+', '-', '*'];
  let correctAnswer;
  let questionForUser;

  const firstNumber = getRandomNumber(1, 20);
  const secondNumber = getRandomNumber(1, 20);
  const operatorNumber = getRandomNumber(0, operators.length);
  const operator = operators[operatorNumber];

  switch (operator) {
    case '-':
      correctAnswer = String(firstNumber - secondNumber);
      questionForUser = `${firstNumber} - ${secondNumber}`;
      break;
    case '*':
      correctAnswer = String(firstNumber * secondNumber);
      questionForUser = `${firstNumber} * ${secondNumber}`;
      break;
    default:
      correctAnswer = String(firstNumber + secondNumber);
      questionForUser = `${firstNumber} + ${secondNumber}`;
  }
  return [questionForUser, correctAnswer];
};

const calcGame = () => {
  gameLogic(gameDescription, calcData);
};

export default calcGame;

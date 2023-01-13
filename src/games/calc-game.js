import getRandomNumber from '../getRandomNumber.js';
import gameLogic from '../index.js';

const gameDescription = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomNumber(0, operators.length - 1)];
};

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Operatior ${operator} is not supported`);
  }
};

const calcData = () => {
  const num1 = getRandomNumber(1, 20);
  const num2 = getRandomNumber(1, 20);
  const operator = getRandomOperator();

  const questionForUser = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operator));

  return [questionForUser, correctAnswer];
};

const calcGame = () => {
  gameLogic(gameDescription, calcData);
};

export default calcGame;

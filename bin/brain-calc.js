#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const calcGame = () => {
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);

  console.log('What is the result of the expression?');
  let correctAnswers = 0;
  const operators = ['+', '-', '*'];
  let result;
  let questionForUser;

  for (let i = 0; i <= 2; i += 1) {
    const firstNumber = Math.round(Math.random() * (20 - 1) + 1);
    const secondNumber = Math.round(Math.random() * (20 - 1) + 1);
    const rand = Math.floor(Math.random() * operators.length);
    const operator = operators[rand];

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
    const yourAnswer = readlineSync.question(`Question: ${questionForUser} \nYour answer: `);
    if (Number(yourAnswer) === result) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`);
    }
  }

  if (correctAnswers >= 2) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log('Sorry, you lose :( Try again!');
  }
};

calcGame();

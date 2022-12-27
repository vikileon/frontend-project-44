import readlineSync from 'readline-sync';

const gameLogic = (gameDescription, gameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);

  console.log(gameDescription);
  let correctAnswers = 0;

  for (let i = 1; i <= 3; i += 1) {
    const [questionForUser, correctAnswer] = gameData();

    console.log(`Question: ${questionForUser}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
export default gameLogic;

import readlineSync from 'readline-sync';

export function askUserName() {
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
}

export function makeProgression() {
  const firstNumber = Math.round(Math.random() * (10 - 1) + 1);
  const difference = Math.round(Math.random() * (10 - 1) + 1);
  const progression = [firstNumber];
  const progressionLength = Math.round(Math.random() * (10 - 5) + 5);
  let nextNumber;

  for (let i = 1; i < progressionLength; i += 1) {
    nextNumber = progression[i - 1] + difference;
    progression.push(nextNumber);
  }

  return progression;
}

export function isPrime() {
  const randomNumber = Math.round(Math.random() * (100 - 1) + 1);
  let result = 'yes';

  if (randomNumber === 1) {
    result = 'yes';
  } else if (randomNumber > 1) {
    for (let i = 2; i < randomNumber; i++) {
      if (randomNumber % i === 0) {
        result = 'no'
      } else {
        result = 'yes'
      }
    }
  }
  return result;
}
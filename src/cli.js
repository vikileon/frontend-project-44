import readlineSync from 'readline-sync';

export function askUserName() {
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
}

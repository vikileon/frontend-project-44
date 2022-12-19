import readlineSync from 'readline-sync';

export function askUserName() {
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
}

// сначала напишу функцию make progression, которую можно будет
// вынести в отдельный файл и для каждого захода игры генерировать новую прогрессию

// сначала создаем массив, начинающийся с рандомного числа.
// каждый последующий элемент массива будет больше предыдущего на случайное число (от 1 до 10)

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
// уже непосредственно в файле с игрой программа будет вытаскивать случайный элемент массива
// (чтобы сравнивать с ним ответ игрока)
// и заменять его на '..'

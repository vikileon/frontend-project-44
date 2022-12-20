const makeProgression = () => {
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
};

export default makeProgression;

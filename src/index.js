import readlineSync from 'readline-sync';

const greet = () => {
  console.log('Welcome to the Brain Games!');
  
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  return name;
};

const game = (taskDescription, buildQuestion, findAnswer, winstreak = 3) => {
  const play = () => {
    for (let i = 0; i < winstreak; i += 1) {
      const question = buildQuestion();

      console.log(`Question: ${question}`);
      const answer = readlineSync.question('Your answer: ');
      const correctAnswer = findAnswer(question);

      if (answer === correctAnswer) {
        console.log('Correct!');
      } else {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
        return false;
      }
    }

    return true;
  };

  const name = greet();
  console.log(taskDescription);

  const victory = play();

  if (victory) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }

  return victory;
};

export default game;

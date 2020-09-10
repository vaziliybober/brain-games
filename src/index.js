import readlineSync from 'readline-sync';

const winstreak = 3;

const runGame = (taskDescription, buildQuestionAndAnswer) => {
  const play = () => {
    for (let i = 0; i < winstreak; i += 1) {
      const { question, answer } = buildQuestionAndAnswer();

      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');

      if (userAnswer !== answer) {
        console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
        return false;
      }

      console.log('Correct!');
    }

    return true;
  };

  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  console.log(taskDescription);

  const victory = play();

  if (victory) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default runGame;

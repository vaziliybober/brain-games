import readlineSync from 'readline-sync';

const runGame = (taskDescription, buildQuestionAndAnswer, winstreak = 3) => {
  const play = () => {
    for (let i = 0; i < winstreak; i += 1) {
      const questionAndAnswer = buildQuestionAndAnswer();

      console.log(`Question: ${questionAndAnswer.question}`);
      const userAnswer = readlineSync.question('Your answer: ');

      if (userAnswer === questionAndAnswer.answer) {
        console.log('Correct!');
      } else {
        console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${questionAndAnswer.answer}".`);
        return false;
      }
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

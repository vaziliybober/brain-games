import readlineSync from 'readline-sync';
import { randint } from './general-logic.js';
import greet from './cli.js';

const findRightAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

const play = () => {
  const winstreak = 3;

  for (let i = 0; i < winstreak; i += 1) {
    const from = 1;
    const to = 100;
    const number = randint(from, to);

    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = findRightAnswer(number);

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      return false;
    }
  }

  return true;
};

const run = () => {
  const name = greet();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const victory = play();

  if (victory) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }

  return victory;
};

export default run;

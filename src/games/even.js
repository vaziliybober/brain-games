import runGame from '../index.js';
import { genRandInt } from '../util.js';

const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const buildQuestionAndAnswer = () => {
  const from = 1;
  const to = 100;

  const number = genRandInt(from, to);

  return {
    question: String(number),
    answer: isEven(number) ? 'yes' : 'no',
  };
};

const start = () => {
  runGame(taskDescription, buildQuestionAndAnswer);
};

export default start;

import runGame from '../index.js';
import { genRandInt } from '../util.js';

const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const buildQuestion = () => {
  const from = 1;
  const to = 100;

  const number = genRandInt(from, to);

  return {
    text: String(number),
    answer: number % 2 === 0 ? 'yes' : 'no',
  };
};

const start = () => {
  runGame(taskDescription, buildQuestion);
};

export default start;

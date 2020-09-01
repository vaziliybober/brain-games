import game from '../index.js';
import { genRandInt } from '../util.js';

const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const buildQuestion = () => {
  const from = 1;
  const to = 100;

  return String(genRandInt(from, to));
};

const findAnswer = (question) => {
  if (question % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

const start = () => {
  game(taskDescription, buildQuestion, findAnswer);
};

export default start;

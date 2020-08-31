import game from '../index.js';
import { randint } from '../util.js';

const buildQuestion = () => {
  const from = 1;
  const to = 100;

  return String(randint(from, to));
};

const findAnswer = (question) => {
  if (question % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

const start = () => {
  const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  game(taskDescription, buildQuestion, findAnswer);
};

export default start;

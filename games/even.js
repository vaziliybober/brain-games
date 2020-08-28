import game from '../src/index.js';
import { randint } from '../src/util.js';

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
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  game(rules, buildQuestion, findAnswer);
};

export default start;

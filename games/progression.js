import game from '../src/index.js';
import { randint, arythmProgression } from '../src/util.js';

const buildQuestion = () => {
  const firstElem = randint(1, 10);
  const step = randint(1, 10);
  const length = 10;
  const replacementIndex = randint(0, length);

  const progression = arythmProgression(firstElem, step, length);
  progression[replacementIndex] = '..';

  return progression.join(' ');
};

const findAnswer = (question) => {
  const progression = question.split(' ').map((x) => (x === '..' ? x : Number(x)));
  const replacementIndex = progression.indexOf('..');
  const offset = replacementIndex >= 2 ? 0 : 2;
  const number = progression[0 + offset];
  const nextNumber = progression[1 + offset];
  const step = nextNumber - number;

  const result = replacementIndex === 0 ? progression[1] - step
    : progression[replacementIndex - 1] + step;

  return String(result);
};

const start = () => {
  const rules = 'What number is missing in the progression?';

  game(rules, buildQuestion, findAnswer);
};

export default start;

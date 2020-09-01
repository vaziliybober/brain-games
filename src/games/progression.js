import game from '../index.js';
import { randint } from '../util.js';

const arythmProgression = (first, step, length) => {
  const result = [];

  for (let i = 0; i < length; i += 1) {
    result.push(first + step * i);
  }

  return result;
};

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
  const taskDescription = 'What number is missing in the progression?';

  game(taskDescription, buildQuestion, findAnswer);
};

export default start;

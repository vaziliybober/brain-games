import game from '../index.js';
import { genRandInt } from '../util.js';

const taskDescription = 'What number is missing in the progression?';

const arythmProgression = (first, step, length) => {
  const result = [];

  for (let i = 0; i < length; i += 1) {
    result.push(first + step * i);
  }

  return result;
};

const buildQuestion = () => {
  const firstElem = genRandInt(1, 10);
  const step = genRandInt(1, 10);
  const length = 10;
  const replacementIndex = genRandInt(0, length);

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
  game(taskDescription, buildQuestion, findAnswer);
};

export default start;

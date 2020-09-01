import runGame from '../index.js';
import { genRandInt } from '../util.js';

const taskDescription = 'What number is missing in the progression?';

const buildArythmProgression = (first, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(first + step * i);
  }

  return progression;
};

const buildQuestion = () => {
  const firstElem = genRandInt(1, 10);
  const step = genRandInt(1, 10);
  const length = 10;
  const replacementIndex = genRandInt(0, length);

  const progression = buildArythmProgression(firstElem, step, length);
  const elemToReplace = progression[replacementIndex];
  progression[replacementIndex] = '..';

  return {
    text: progression.join(' '),
    answer: String(elemToReplace),
  };
};

const start = () => {
  runGame(taskDescription, buildQuestion);
};

export default start;

import runGame from '../index.js';
import { genRandInt } from '../util.js';

const taskDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const buildArythmProgression = (first, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(first + step * i);
  }

  return progression;
};

const buildQuestionAndAnswer = () => {
  const firstElem = genRandInt(1, 10);
  const step = genRandInt(1, 10);
  const replacementIndex = genRandInt(0, progressionLength);

  const progression = buildArythmProgression(firstElem, step, progressionLength);
  const elemToReplace = progression[replacementIndex];
  progression[replacementIndex] = '..';

  return {
    question: progression.join(' '),
    answer: String(elemToReplace),
  };
};

const start = () => {
  runGame(taskDescription, buildQuestionAndAnswer);
};

export default start;

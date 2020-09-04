import runGame from '../index.js';
import { genRandInt } from '../util.js';

const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const buildQuestionAndAnswer = () => {
  const from = 1;
  const to = 100;
  const number = genRandInt(from, to);

  return {
    question: String(number),
    answer: (isPrime(Number(number)) ? 'yes' : 'no'),
  };
};

const start = () => {
  runGame(taskDescription, buildQuestionAndAnswer);
};

export default start;

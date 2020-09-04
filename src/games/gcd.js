import runGame from '../index.js';
import { genRandInt } from '../util.js';

const taskDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  const iter = (divisor) => {
    if (a % divisor === 0 && b % divisor === 0) {
      return divisor;
    }

    return iter(divisor - 1);
  };

  return iter(Math.min(a, b));
};

const buildQuestionAndAnswer = () => {
  const from = 1;
  const to = 100;
  const number1 = genRandInt(from, to);
  const number2 = genRandInt(from, to);

  return {
    question: `${number1} ${number2}`,
    answer: String(gcd(number1, number2)),
  };
};

const start = () => {
  runGame(taskDescription, buildQuestionAndAnswer);
};

export default start;

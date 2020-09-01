import game from '../index.js';
import { genRandInt } from '../util.js';

const taskDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  const iter = (result) => {
    if (a % result === 0 && b % result === 0) {
      return result;
    }

    return iter(result - 1);
  };

  return iter(Math.min(a, b));
};

const buildQuestion = () => {
  const from = 1;
  const to = 100;

  return `${genRandInt(from, to)} ${genRandInt(from, to)}`;
};

const findAnswer = (question) => {
  const parts = question.split(' ');
  const number1 = parts[0];
  const number2 = parts[1];

  return String(gcd(number1, number2));
};

const start = () => {
  game(taskDescription, buildQuestion, findAnswer);
};

export default start;

import game from '../index.js';
import { randint } from '../util.js';

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

  return `${randint(from, to)} ${randint(from, to)}`;
};

const findAnswer = (question) => {
  const parts = question.split(' ');
  const number1 = parts[0];
  const number2 = parts[1];

  return String(gcd(number1, number2));
};

const start = () => {
  const taskDescription = 'Find the greatest common divisor of given numbers.';

  game(taskDescription, buildQuestion, findAnswer);
};

export default start;

import game from '../index.js';
import { randint, gcd } from '../util.js';

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

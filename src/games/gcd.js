import runGame from '../index.js';
import { genRandInt } from '../util.js';

const taskDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {  
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
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

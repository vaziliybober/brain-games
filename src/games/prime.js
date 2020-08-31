import game from '../index.js';
import { randint, isPrime } from '../util.js';

const buildQuestion = () => {
  const from = 1;
  const to = 100;

  return String(randint(from, to));
};

const findAnswer = (question) => (isPrime(Number(question)) ? 'yes' : 'no');

const start = () => {
  const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  game(taskDescription, buildQuestion, findAnswer);
};

export default start;

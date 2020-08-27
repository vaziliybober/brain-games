import game from '../src/index.js';
import { randint, randchoice } from '../src/util.js';

const parseOperator = (string) => {
  if (string === '+') {
    return (a, b) => a + b;
  }

  if (string === '-') {
    return (a, b) => a - b;
  }

  if (string === '*') {
    return (a, b) => a * b;
  }

  return null;
};

const buildQuestion = () => {
  const from = 1;
  const to = 100;
  const operand1 = randint(from, to);
  const operand2 = randint(from, to);
  const operator = randchoice(['+', '-', '*']);

  return `${operand1} ${operator} ${operand2}`;
};

const findAnswer = (question) => {
  const parts = question.split(' ');
  const operand1 = Number(parts[0]);
  const operand2 = Number(parts[2]);
  const operator = parseOperator(parts[1]);

  return String(operator(operand1, operand2));
};

const start = () => {
  const rules = 'What is the result of the expression?';

  game(rules, buildQuestion, findAnswer);
};

export default start;

import game from '../index.js';
import { genRandInt, chooseRandElem } from '../util.js';

const taskDescription = 'What is the result of the expression?';

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
  const operand1 = genRandInt(from, to);
  const operand2 = genRandInt(from, to);
  const operator = chooseRandElem(['+', '-', '*']);

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
  game(taskDescription, buildQuestion, findAnswer);
};

export default start;

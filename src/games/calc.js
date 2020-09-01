import runGame from '../index.js';
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
  const operatorSign = chooseRandElem(['+', '-', '*']);

  return {
    text: `${operand1} ${operatorSign} ${operand2}`,
    answer: String(parseOperator(operatorSign)(operand1, operand2)),
  };
};

const start = () => {
  runGame(taskDescription, buildQuestion);
};

export default start;

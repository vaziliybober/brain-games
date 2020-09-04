import runGame from '../index.js';
import { genRandInt, chooseRandElem } from '../util.js';

const taskDescription = 'What is the result of the expression?';
const operatorSigns = ['+', '-', '*'];

const getOperatorBySign = (string) => {
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

const buildQuestionAndAnswer = () => {
  const from = 1;
  const to = 100;
  const operand1 = genRandInt(from, to);
  const operand2 = genRandInt(from, to);
  const operatorSign = chooseRandElem(operatorSigns);
  const operator = getOperatorBySign(operatorSign);

  return {
    question: `${operand1} ${operatorSign} ${operand2}`,
    answer: String(operator(operand1, operand2)),
  };
};

const start = () => {
  runGame(taskDescription, buildQuestionAndAnswer);
};

export default start;

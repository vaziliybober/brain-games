import runGame from '../index.js';
import { genRandInt, chooseRandElem } from '../util.js';

const taskDescription = 'What is the result of the expression?';
const from = 1;
const to = 100;

const mapSignToOperator = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const buildQuestionAndAnswer = () => {
  const operand1 = genRandInt(from, to);
  const operand2 = genRandInt(from, to);
  const operatorSign = chooseRandElem(Object.keys(mapSignToOperator));
  const operator = mapSignToOperator[operatorSign];

  return {
    question: `${operand1} ${operatorSign} ${operand2}`,
    answer: String(operator(operand1, operand2)),
  };
};

const start = () => {
  runGame(taskDescription, buildQuestionAndAnswer);
};

export default start;

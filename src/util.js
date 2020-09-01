export const genRandInt = (from, to) => from + Math.floor(Math.random() * (to - from));

export const chooseRandElem = (array) => array[genRandInt(0, array.length)];

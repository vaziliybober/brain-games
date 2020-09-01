export const randint = (from, to) => from + Math.floor(Math.random() * (to - from));

export const randchoice = (array) => array[randint(0, array.length)];

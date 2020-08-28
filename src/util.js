export const randint = (from, to) => from + Math.floor(Math.random() * (to - from));

export const randchoice = (array) => array[randint(0, array.length)];

export const gcd = (a, b) => {
  const iter = (result) => {
    if (a % result === 0 && b % result === 0) {
      return result;
    }

    return iter(result - 1);
  };

  return iter(Math.min(a, b));
};

export const arythmProgression = (first, step, length) => {
  const result = [];
  let current = first;

  for (let i = 0; i < length; i += 1) {
    result.push(current);
    current += step;
  }

  return result;
};

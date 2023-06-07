const first = [1, 2, 3];
const second = [4, 5, 6];

// use .concat() to combine to arrays

const combined = first.concat(second);
console.log(combined);

// use const.combined = [...first, ...second]; **************************** easier method for combining and adding elements

// use .slice() to slice the array in different parts

const third = [1, 2, 3, 4, 5, 6, 7];
const slice = third.slice(3, 5);
console.log(slice);
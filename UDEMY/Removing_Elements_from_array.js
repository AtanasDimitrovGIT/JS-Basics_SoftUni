const numbers = [1, 2, 3, 4];

// use .pop to remove the last element 

const last = numbers.pop();
console.log(numbers)
console.log(last)

// use .shift to remove the first element

const first = numbers.shift();
console.log(numbers);
console.log(first);

// use splice to remove an element by using the second argument in the brackets

numbers.splice(2, 1);
console.log(numbers);
const numbers = [3, 4];
// use .push to add elements in the end of an array
numbers.push(5);

console.log(numbers);


// use .unshift to add elements in the beggining of an array
numbers.unshift(1, 2);

console.log(numbers);

// use .splice to add elements(using the index[] of the element) to a given possision in an array
numbers.splice(2, 0, "a", "b");

console.log(numbers);
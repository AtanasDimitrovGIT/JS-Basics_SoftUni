// method 1

const numbers = [1, 2, 3];

for (let number of numbers)
    console.log(number);


// method 2

numbers.forEach(function(number) {
    console.log(number);
});   
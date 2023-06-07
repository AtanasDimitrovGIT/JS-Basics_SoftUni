function check(input) {

   let sum = 0;
   let n = input[0];
   
   for (let i = 0; i < n.length; i++ ){
    sum = sum + Number(n[i]);
   }

   console.log(`The sum of the digits is: ${sum}`);
    
}
check(["1234"])
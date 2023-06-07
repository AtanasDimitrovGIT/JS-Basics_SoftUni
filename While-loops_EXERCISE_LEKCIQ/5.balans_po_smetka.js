function check(input) {

    let index = 0;
    let money = (input[index]);
    index++;
    let increase = 0;


    while (money !== "NoMoreMoney"){
       let amount = Number(money);
       
       if (amount < 0){
        console.log("Invalid operation!");
        break;
       }

       increase = increase + amount;
       console.log("Increase: " + amount.toFixed(2));
       money = input[index];
       index++;
    }
    
console.log("Total: " + increase.toFixed(2));
    
}
check(["120", "45.55", "-150"])
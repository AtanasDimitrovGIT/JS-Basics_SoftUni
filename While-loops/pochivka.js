function check(input) {

    let index = 0;
    let moneyNeeded = Number(input[index]);
    index++;
    
    let moneyAvailable = Number(input[index]);
    index++;

    let action = input[index];
    index++;

    let sumSavedOrSpent = Number(input[index]);
    index++;

    let daysSpentCounter = 0;
    let daysPassed = 0;

    while (moneyAvailable < moneyNeeded){
        daysPassed++;
        if (action === "spend"){
            if(sumSavedOrSpent > moneyAvailable){
            moneyAvailable = 0;
        }
            else {
            moneyAvailable = moneyAvailable - sumSavedOrSpent
        }
        daysSpentCounter++;

    }   else {
        moneyAvailable = moneyAvailable + sumSavedOrSpent;
        daysSpentCounter = 0;
    } 
    
    if (daysSpentCounter === 5){
        console.log("You can`t save the money.");
        console.log(daysPassed)
        return;
    }

    action = input[index];
    index++;
    
    sumSavedOrSpent = Number(input[index]);
    index++;
    
        

    
    
}

console.log("You saved the money for " + daysPassed + " days.")

}

check(["250",

"150",

"spend",

"50",

"spend",

"50",

"save",

"100",

"save",

"100"])
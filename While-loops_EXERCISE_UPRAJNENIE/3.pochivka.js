function check(input) {

    let index = 0;
    let moneyNeeded = Number(input[index]);
    index++;
    let availableMoney = Number(input[index]);
    index++;
    let action = input[index];
    index++;
    let spendOrSave = Number(input[index]);
    index++;
    let daysPassed = 0;
    let daysSpentCounter = 0;

    while (availableMoney < moneyNeeded){
        daysPassed ++;

        if (action === "spend"){
            if (spendOrSave > availableMoney){
                availableMoney = 0;
            }
            else {
                availableMoney = availableMoney - spendOrSave;
            }
            daysSpentCounter = 0;
        }
        else {
            availableMoney = availableMoney + spendOrSave;
        }

        if (daysSpentCounter === 5){
            console.log("You can`t save the money.");
            console.log(daysPassed)
            return;
        }   
        
        action = input[index];
        index++;
        
        spendOrSave = Number(input[index]);
        index++;
    }
    console.log("You saved the money for " + daysPassed + " days.")


    


}
check(["2000",

"1000",

"spend",

"1200",

"save",

"2000"])
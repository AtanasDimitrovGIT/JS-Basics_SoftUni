function excursion(input) {

    let priceOfExcursion = Number(input[0]);
    let numberOfPuzzles = Number(input[1]);
    let numberOfDolls = Number(input[2]);
    let numberOfTeddyBears = Number(input[3]);
    let numberOfMinions = Number(input[4]);
    let numberOfTrucks = Number(input[5]);

    let totalSum = numberOfPuzzles * 2.6 + numberOfDolls * 3 + numberOfTeddyBears * 4.10 + numberOfMinions * 8.20 + numberOfTrucks * 2;
    let numberOfToys = numberOfPuzzles + numberOfDolls + numberOfTeddyBears + numberOfMinions + numberOfTrucks;
    let newTotalSum = undefined
    let profit = undefined


    if (numberOfToys >= 50){
        newTotalSum = totalSum - (totalSum * 0.25);
        profit = newTotalSum - (newTotalSum * 0.10);{
            if (profit > priceOfExcursion){
                console.log("Yes! " + (profit - priceOfExcursion).toFixed(2) + " lv " + "left.")
            }
            else{
                console.log("Not enough money!" + (priceOfExcursion - profit).toFixed(2) + " lv " + "needed.")
            }
        
        }

            
        
    }




    
}
excursion(["40.8",

"20",

"25",

"30",

"50",

"10"])
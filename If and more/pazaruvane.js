function neededSum(input) {

    let budget = Number(input[0]);
    let numOfGPU = Number(input[1]);
    let numOfCPU = Number(input[2]);
    let numOfRAM = Number(input[3]);
    
    let priceGPU = numOfGPU * 250;
    let priceCPU = (priceGPU * 0.35) * numOfCPU;
    let priceRAM = (priceGPU * 0.10) * numOfRAM;
    let totalSum = priceGPU + priceCPU + priceRAM;
    let newTotalSum = undefined
    if (numOfGPU > numOfCPU){
        newTotalSum = totalSum - (totalSum * 0.15);
    }
    else{
        newTotalSum = totalSum;
    }
    if (budget > newTotalSum){
        console.log("You have " + (budget - newTotalSum) + " leva left!");
    }
    else if (budget < newTotalSum){
        console.log("Not enough money! You need " + (newTotalSum - budget).toFixed(2) + " leva more!");
    }
}

neededSum(["900",

"2",

"1",

"3"])

neededSum(["920.45",

"3",

"1",

"1"])
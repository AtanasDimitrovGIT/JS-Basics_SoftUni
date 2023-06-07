function check(input) {

    let familyBudget = Number(input[0]);
    let numOfNights = Number(input[1]);
    let priceForNight = Number(input[2]);
    let additionalExpences = Number(input[3]);
    let fullPrice = 0;

    if (numOfNights > 7){
        let newPriceForNight = priceForNight - (priceForNight * 0.05);
        fullPrice = newPriceForNight * numOfNights;
    }
    else{
        fullPrice = priceForNight * numOfNights;
    }

    let fullAdittionalExpences = familyBudget * (additionalExpences / 100);
    
    let newFullPrice = fullPrice + fullAdittionalExpences;
    if (newFullPrice <= familyBudget){
        console.log("Ivanovi will be left with " + (familyBudget - newFullPrice).toFixed(2) + " leva after vacation.");
    }
    else{
        console.log((newFullPrice - familyBudget).toFixed(2) + " leva needed.");
    }





    
}

check(["800.50",
"8",
"100",
"2"])
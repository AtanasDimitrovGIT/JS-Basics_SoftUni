function check(input) {

    let moneyForDay = Number(input[0]);
    let moneyMade = Number(input[1]);
    let moneyExpences = Number(input[2]);
    let priceOfGift = Number(input[3]);

    let moneyForDaySaved = 5 * moneyForDay;
    let moneyMadePeriod = 5 * moneyMade;
    let moneyMadeFull = moneyForDaySaved + moneyMadePeriod;
    let sumAfterExpences = moneyMadeFull - moneyExpences;

    if (sumAfterExpences > priceOfGift){
        console.log(`Profit: ${sumAfterExpences.toFixed(2)} BGN, the gift has been purchased.`)
        
    }
    else{
        console.log(`Insufficient money: ${(priceOfGift - sumAfterExpences).toFixed(2)} BGN.`)
    }


    
}

check(["5.12",
"32.05",
"15",
"150"])
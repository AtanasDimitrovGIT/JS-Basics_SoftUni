function check(input) {

    let age = Number(input[0]);
    let priceOfWasher = Number(input[1]);
    let priceOfToy = Number(input[2]);
    let sum = 0;
    let evenBdayMoney = 10;

    for (let i = 1; i <= age; i++){
        if (i % 2 === 0){
            sum = sum + evenBdayMoney - 1;
            evenBdayMoney = evenBdayMoney + 10;
        }
        else {
            sum = sum + priceOfToy;
        }
    }

    if (sum >= priceOfWasher){
        console.log(`Yes! ${(sum - priceOfWasher).toFixed(2)}`);
    }
    else {
        console.log(`No! ${(priceOfWasher - sum).toFixed(2)}`);
    }


    
}
check(["21",

"1570.98",

"3"])
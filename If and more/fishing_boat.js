function check(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let numFishermen = Number(input[2]);
    let price = 0

    if (season == "Spring"){
        if (numFishermen <= 6){
            price = 3000 - (3000 * 0.10);
        }
        else if (numFishermen >= 7 && numFishermen <= 11){
            price = 3000 - (3000 * 0.15);
        }
        else if (numFishermen > 12){
            price = 3000 - (3000 * 0.25)
        }
    }

    if (season == "Summer"){
        if (numFishermen <= 6){
            price = 4200 - (4200 * 0.10);
        }
        else if (numFishermen >= 7 && numFishermen <= 11){
            price = 4200 - (4200 * 0.15);
        }
        else if (numFishermen > 12){
            price = 4200 - (4200 * 0.25)
        }
    }

    if (season == "Autumn"){
        if (numFishermen <= 6){
            price = 4200 - (4200 * 0.10);
        }
        else if (numFishermen >= 7 && numFishermen <= 11){
            price = 4200 - (4200 * 0.15);
         }
        else if (numFishermen > 12){
            price = 4200 - (4200 * 0.25)
    }
}


    if (season == "Winter"){
        if (numFishermen <= 6){
            price = 2600 - (2600 * 0.10);
        }
        else if (numFishermen >= 7 && numFishermen <= 11){
            price = 2600 - (2600 * 0.15);
        }
        else if (numFishermen > 12){
            price = 2600 - (2600 * 0.25);
        }    
    }

    if (numFishermen % 2 == 0 && season != "Autumn"){
       price = price - (price * 0.05);
    }


    if (budget < price){
        console.log("Not enough money! You need " + (price - budget).toFixed(2) + " leva.")
    }
    else if (budget > price){
        console.log("Yes! You have " + (budget - price) + " leva left.");
    }




    
}
check(["3600",

"Autumn",

"6"])
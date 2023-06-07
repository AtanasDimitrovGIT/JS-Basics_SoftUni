function check(input) {

    let totalSum = Number(input[0]);
    let coins = Math.round(totalSum*100);
    let coinsUsed = 0;
    

    while (coins > 0){
        if (coins >= 200){
            coins  = coins - 200;
            coinsUsed++;
        }
        else if (coins >= 100){
            coins = coins - 100;
            coinsUsed++;
        }
        else if (coins >= 50){
            coins = coins - 50;
            coinsUsed++;
        }
        else if (coins >= 20){
            coins = coins - 20;
            coinsUsed++;
        }
        else if (coins >= 10){
            coins = coins - 10;
            coinsUsed++;
        }
        else if (coins >= 5){
            coins = coins - 5;
            coinsUsed++;
        }
        else if (coins >= 2){
            coins = coins - 2;
            coinsUsed++;
        }   
        else if (coins >= 1){
            coins = coins - 1;
            coinsUsed++;
        }
    }

    console.log(coinsUsed);

    

}    

check(["2"])
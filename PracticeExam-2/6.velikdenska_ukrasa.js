function check(input) {

    let index = 0;
    let client = Number(input[index]);
    index++;

    let sum = 0;
    let average = 0;
    let countProducts = 0;


    for (let i = 0; i < client; i++) {
        let product = input[index];
        index++
        while (product !== "Finish") {
            switch (product) {
                case "basket":
                    sum = sum + 1.50;
                    countProducts++;
                    break;

                case "wreath":
                    sum = sum + 3.80;
                    countProducts++;
                    break;

                case "chocolate bunny":
                    sum = sum + 7;
                    countProducts++;
                    break;

                default:
                    break;
            }
            product = input[index];
            index++;
        }
        if (countProducts % 2 === 0){
            sum = sum - (sum * 0.2);
        }
        console.log(`You purchased ${countProducts} items for ${sum.toFixed(2)} leva.`)
        average = average + sum;
        countProducts = 0;
        sum = 0;

    }
    console.log(`Average bill per client is: ${(average/client).toFixed(2)} leva.`)
}
check([`2`,

    `basket`,

    `wreath`,

    `chocolate bunny`,

    `Finish`,

    `wreath`,

    `chocolate bunny`,

    `Finish`])

function check(input) {

    let typeOfDrink = input[0];
    let sugarQuantity = input[1];
    let numOfDrink = Number(input[2]);
    let price = 0;

    if (sugarQuantity === "Without") {
        switch (typeOfDrink) {
            case "Espresso":
                price = price + (0.90 * numOfDrink) - ((0.90 * numOfDrink) * 0.35);
                if (numOfDrink >= 5) {
                    price = price - (price * 0.25);
                }
                break;

            case "Cappuccino":
                price = price + (1 * numOfDrink) - ((1 * numOfDrink) * 0.35);
                break;

            case "Tea":
                price = price + (0.50 * numOfDrink) - ((0.50 * numOfDrink) * 0.35);
                break;

            default:
                break;
        }
    }

    else if (sugarQuantity === "Normal"){
        switch (typeOfDrink) {
            case "Espresso":
                price = price + (1 * numOfDrink) - ((1 * numOfDrink) * 0.35);
                if (numOfDrink >= 5) {
                    price = price - (price * 0.25);
                }
                break;

            case "Cappuccino":
                price = price + (1.20 * numOfDrink);
                break;

            case "Tea":
                price = price + (0.60 * numOfDrink);
                break;

            default:
                break;
        }
    }

    else if (sugarQuantity === "Extra"){
        switch (typeOfDrink) {
            case "Espresso":
                price = price + (1.20 * numOfDrink) - ((1.20 * numOfDrink) * 0.35);
                if (numOfDrink >= 5) {
                    price = price - (price * 0.25);
                }
                break;

            case "Cappuccino":
                price = price + (1.60 * numOfDrink);
                break;

            case "Tea":
                price = price + (0.70 * numOfDrink);
                break;

            default:
                break;
        }
    }

    if (price > 15){
        price = price - (price * 0.20);
    }

    console.log(`You bought ${numOfDrink} cups of ${typeOfDrink} for ${price.toFixed(2)} lv.`);


}

check(["Tea",
"Extra",
"3"])
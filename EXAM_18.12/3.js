function check(input) {
    
    let typeOfPastry = input[0];
    let numOfOrderedPastry = Number(input[1]);
    let dayFromDecember = Number(input[2]);

    let price = 0;
    let finalPrice = 0;

    if (dayFromDecember <= 15){
        switch (typeOfPastry) {
            case "Cake":
                price = (numOfOrderedPastry * 24);
                if (price >= 100 && price <= 200){
                    price = price - price * 0.15;
                }
                else if (price > 200){
                    price = price - price *0.25;
                }
                finalPrice = price - price * 0.10
                break;

            case "Souffle":
                price = (numOfOrderedPastry * 6.66);
                if (price >= 100 && price <= 200){
                    price = price - price * 0.15;
                }
                else if (price > 200){
                    price = price - price *0.25;
                }
                finalPrice = price - price * 0.10
                break;

            case "Baklava":
                price = (numOfOrderedPastry * 12.60);

                if (price >= 100 && price <= 200){
                    price = price - price * 0.15;
                }
                else if (price > 200){
                    price = price - price *0.25;
                }
                finalPrice = price - price * 0.10
                break;

            default:
                break;
        }
    }

    else if (dayFromDecember > 15 && dayFromDecember <= 22){
        switch (typeOfPastry) {
            case "Cake":
                price = (numOfOrderedPastry * 28.70);
                if (price >= 100 && price <= 200){
                    price = price - price * 0.15;
                }
                else if (price > 200){
                    price = price - price *0.25;
                }
                finalPrice = price;
                break;

            case "Souffle":
                price = (numOfOrderedPastry * 9.80);
                if (price >= 100 && price <= 200){
                    price = price - price * 0.15;
                }
                else if (price > 200){
                    price = price - price *0.25;
                }
                finalPrice = price;
                break;
                
            case "Baklava":
                price = (numOfOrderedPastry * 16.98);

                if (price >= 100 && price <= 200){
                    price = price - price * 0.15;
                }
                else if (price > 200){
                    price = price - price *0.25;
                }
                finalPrice = price;
                break;

            default:
                break;
        }
    }

    else if (dayFromDecember > 22){
        switch (typeOfPastry) {
            case "Cake":
                price = (numOfOrderedPastry * 28.70);
                finalPrice = price;
                break;
            case "Souffle":
                price = (numOfOrderedPastry * 9.80);
                finalPrice = price;
                break;
            case "Baklava":
                price = (numOfOrderedPastry * 16.98);
                finalPrice = price;
                break;
            default:
                break;
        }
    }

    console.log(finalPrice.toFixed(2));

}
check(["Cake",
"5",
"12"])


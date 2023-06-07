function check(input) {

    let typeFlower = input[0];
    let numFlower = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;
    newPrice = undefined;


    if (typeFlower == "Roses"){
        if (numFlower > 80){
           price = (numFlower * 5) - ((numFlower * 5) * 0.10);
        }
        else{
            price = numFlower * 5;
        }
    }

    if (typeFlower == "Dahlias"){
        if (numFlower > 90){
            price = (numFlower * 3.80) - ((numFlower * 3.80) * 0.15);
        }
        else{
            price = numFlower * 3.80;
        }
    }

    if (typeFlower == "Tulips"){
        if (numFlower > 80){
            price = (numFlower * 2.80) - ((numFlower * 2.80) * 0.15);
        }
        else{
            price = numFlower * 2.80;
        }
    }
    
    if (typeFlower == "Narcissus"){
        if (numFlower < 120){
            price = (numFlower * 3) + ((numFlower * 3) * 0.15);
        }
        else{
            price = numFlower * 3;
        }
    }

    if (typeFlower == "Gladiolus"){
        if (numFlower < 80){
            price = (numFlower * 2.50) + ((numFlower * 2.50) * 0.20);
        }
        else{
            price = numFlower * 2.50;
        }
    }

    if (budget > price){
        console.log("Hey, you have a great garden with " + numFlower + " " + typeFlower + " and " + (budget - price).toFixed(2) + " leva left.");
    }
    else if (price > budget){
        console.log("Not enough money, you need " + (price - budget).toFixed(2) + " leva more.");
    }


    
}
check(["Roses",

"55",

"250"])
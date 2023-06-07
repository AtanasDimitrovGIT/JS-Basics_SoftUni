function check(input) {

    let quantityFoodKG = input[0];
    let index = 1;
    let foodGR = input[index];
    index++;

    let foodEaten = 0;


    while (foodGR !== "Adopted"){
        foodGR = Number(foodGR);
        foodEaten = foodEaten + foodGR;
        
        foodGR = input[index];
        index++;

    }


    let quantityfoodInGR = quantityFoodKG * 1000;
    if (foodEaten <= quantityfoodInGR){
        console.log(`Food is enough! Leftovers: ${quantityfoodInGR - foodEaten} grams.`)
    }
    else{
        console.log(`Food is not enough. You need ${foodEaten- quantityfoodInGR} grams more.`)
    }

    
    
}
check(["3",
"1000",
"1000",
"1000",
"Adopted"])
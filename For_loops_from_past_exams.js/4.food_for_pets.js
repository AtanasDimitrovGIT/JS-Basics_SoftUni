function check(input) {
    let numDays = Number(input[0]);
    let fullFoodQuantity = Number(input[1]);
    let totalFoodEatenByDog = 0;
    let totalFoodEatenByCat = 0;
    let biscuits = 0;
    
    for (let day = 1; day <= numDays; day++) {
      let foodEatenByDog = Number(input[day * 2]);
      let foodEatenByCat = Number(input[day * 2 + 1]);
      
      totalFoodEatenByDog += foodEatenByDog;
      totalFoodEatenByCat += foodEatenByCat;
      
      if (day === 3) {
        biscuits += (foodEatenByDog + foodEatenByCat) * 0.10;
      }
    }
    
    let totalFoodEatenByBoth = totalFoodEatenByDog + totalFoodEatenByCat;
    let percentEatenFood = (totalFoodEatenByBoth / fullFoodQuantity) * 100;
    let percentEatenFoodByDog = (totalFoodEatenByDog / totalFoodEatenByBoth) * 100;
    let percentEatenFoodByCat = (totalFoodEatenByCat / totalFoodEatenByBoth) * 100;
    
    console.log(`Total eaten biscuits: ${Math.ceil(biscuits)}gr.`);
    console.log(`${percentEatenFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentEatenFoodByDog.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentEatenFoodByCat.toFixed(2)}% eaten from the cat.`);
  }
  
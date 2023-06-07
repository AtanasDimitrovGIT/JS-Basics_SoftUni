function check(input){

    let degrees = Number(input[0]);
    let timeOfTheDay = input[1];
    let outfit = undefined;
    let shoes = undefined;


    
    if (degrees >= 10 && degrees <= 18){
        if (timeOfTheDay == "Morning"){
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        }    
        else if (timeOfTheDay == "Afternoon" || timeOfTheDay == "Evening"){
            outfit = "Shirt";
            shoes = "Moccasins";
        }            

    }  
    
    
   if (degrees > 18 && degrees <= 24){
        if(timeOfTheDay == "Morning" || timeOfTheDay == "Evening"){
            outfit = "Shirt";
            shoes = "Moccasins";
        }
        else if (timeOfTheDay = "Affternoon"){
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
   }


   if (degrees >= 25){
    if(timeOfTheDay == "Morning"){
        outfit = "T-Shirt";
        shoes = "Sandals";
    }
    else if (timeOfTheDay = "Affternoon"){
        outfit = "Swim Suit";
        shoes = "Barefoot";
    }
    else if (timeOfTheDay = "Evening"){
        outfit = "Shirt";
        shoes = "Moccasins";
    }
}
console.log("It`s " + degrees + " degress, get your " + outfit + " and " + shoes + ".");

}  

check(["22",

"Afternoon"])
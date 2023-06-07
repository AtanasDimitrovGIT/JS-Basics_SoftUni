function check(input) {

    let month = Number(input[0]);
    let numNights = Number(input[1]);
    let priceStudio = 0;
    let priceApartament = 0;

    
    
    if (month == "May" || month == "October" ){
        priceStudio = numNights * 50;
        priceApartament = numNights * 65;
        if (numNights > 7){
            priceStudio = priceStudio - (priceStudio * 0.05);
        }
        else if (numNights > 14){
            priceStudio = priceStudio - (priceStudio * 0.30);
        }


        
    }

    else if (month == "June" || month == "September"){
        priceStudio = numNights * 75.20;
        priceApartament = numNights * 68.70;
        if (numNights > 14){
            priceStudio = priceStudio - (priceStudio * 0.20); 
        } 
    }

    else if (month == "July" || month == "August"){
        priceStudio = numNights * 76;
        priceApartament = numNights * 77;
    }    

    if (numNights > 14){
        priceApartament = priceApartament - (priceApartament * 0.10);

    }

    console.log("Apartament: " + priceApartament + " lv.");
    console.log("Studio: " + priceStudio + " lv.");
}   

check(["August", "20"])
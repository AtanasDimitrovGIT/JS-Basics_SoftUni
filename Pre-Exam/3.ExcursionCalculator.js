function check(input) {

    let numOfPeople = Number(input[0]);
    let season = input[1];
    let price = 0;

    if (numOfPeople <= 5){
        switch (season) {
            case "spring":
                price = numOfPeople * 50.00;
                break;

            case "summer":
                price = (numOfPeople * 48.50) - (numOfPeople * 48.50) * 0.15;
                break;
            
            case "autumn":
                price = numOfPeople * 60.00;
                break;

            case "winter":
                price =  (numOfPeople * 86.00) + (numOfPeople * 86.00) * 0.08;
                break; 

            default:
                break;
        }
    }

    if (numOfPeople > 5){
        switch (season) {
            case "spring":
                price = numOfPeople * 48.00;
                break;

            case "summer":
                price = (numOfPeople * 45.00) - (numOfPeople * 45.00) * 0.15;
                break;
            
            case "autumn":
                price = numOfPeople * 49.50;
                break;

            case "winter":
                price = (numOfPeople * 85.00) + (numOfPeople * 85.00) * 0.08;
                break; 
                           
            default:
                break;
        }
    }

    console.log(price.toFixed(2) + " leva.")
    
}

check(["20",
"winter"])
function check(input) {

    let initialNumberOfEggs = Number(input[0]);
    

    for (i = 1; i < input.length; i+=2){
        let action = input[i];
        let numOfEggs = Number(input[i + 1]);


        switch (action) {
            case "Buy":
                initialNumberOfEggs = initialNumberOfEggs - numOfEggs;
                if (initialNumberOfEggs < numOfEggs){
                    numOfEggs++;
                    console.log(`Not enough eggs in store!`);
                    console.log(`You can buy only ${initialNumberOfEggs}.`);
                    return;
                }
                break;
            case "Fill":
                initialNumberOfEggs = initialNumberOfEggs + numOfEggs;
                break;
            case "Close":
                console.log(`Store is closed!`);
                console.log(`${numOfEggs} eggs sold.`);
                break;

            default:
                break;
            }

       
        
        
    }

    
    
}
check(["20",
"Fill",
"30",
"Buy",
"15",
"Buy",
"20",
"Close"])
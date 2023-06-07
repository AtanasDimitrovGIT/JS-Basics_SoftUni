function check(input) {

    let numOfTrainingDays = Number(input[0]);
    let firstDay = Number(input[1]);
    let secondDay = Number(input[2]);
    let startingPoint = firstDay + (firstDay * (secondDay / 100  ))
    let fullsum = 0;
    

    for (i = 3; i < input.length; i++){
        let everyOtherDay = Number(input[i]); 
        startingPoint = startingPoint + (startingPoint * (everyOtherDay / 100 ));
        fullsum = fullsum + startingPoint;


    }
    let endKM = fullsum + firstDay + (firstDay + (firstDay * (secondDay / 100  )))

    if (endKM >= 1000){
        console.log(`You've done a great job running ${Math.ceil(endKM - 1000)} more kilometers!`);
    }
    else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - endKM)} more kilometers`)
    }

    
    
    

    
}
check(["4",
"100",
"30",
"50",
"60",
"80"])
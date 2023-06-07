function check(input) {

    let index = 0;
    let currentSteps = input[index];
    index++;
    let totalSteps = 0;

    


    while (currentSteps !== "Going home"){
        currentSteps = Number(currentSteps);
        totalSteps = currentSteps + totalSteps;
        if (totalSteps >= 10000){
            let stepsAboveGoal = totalSteps - 10000;
            console.log("Goal reached! Good job!");
            console.log(stepsAboveGoal + " steps over the goal")
            return;
            
                        
        }
        currentSteps = input[index];
        index++;
    }

    let stepsGoingHome = Number(input[index]);
    totalSteps = totalSteps + stepsGoingHome;

    if (totalSteps >= 10000){
        let stepsAboveGoal = totalSteps - 10000;
        console.log("Goal reached! Good job!");
        console.log(stepsAboveGoal + " steps over the goal")

    }else {
        let stepsBelowGoal = 10000 - totalSteps;
        console.log(stepsBelowGoal + " more steps to reach goal!")

    }
    
    
}

check(["1500", "3000", "250", "1548", "2000", "Going home", "2000"])
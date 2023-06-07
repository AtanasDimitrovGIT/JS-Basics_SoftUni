function check(input) {
    
    let index = 0;
    let steps = Number(input[index]);
    index++;
    let totalSteps = 0;

    while (steps !== "Going home"){
        steps = Number(steps);
        totalSteps = totalSteps + steps;

        if (totalSteps >= 10000){
            let stepsAboveGoal = totalSteps - 10000;
            console.log("Goal reached! Good job!")
            console.log(stepsAboveGoal + " steps over the goal!")
            return;
        }
        steps = input[index];
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
        console.log(stepsBelowGoal + " more steps to reach goal.")

    }
}
check(["1500", "300", "2500", "3000", "Going home", "200"])
function check(input) {

    index = 0;
    let name = input[index];
    index++;
    let numGoals = input[index];
    index++;
    let maxgoals = 0;

    while (name !== "End"){

        if (numGoals > maxgoals){
            numGoals = maxgoals;
        }
        if (numGoals >= 10){
            break;
        }
        name = input[index];
        index++;
        numGoals = Number(input[index]);
        index++;
        
    }
 
    console.log(`${name} is the best player!`);
    
    if (numGoals >= 3){
        console.log(`He has scored ${numGoals} goals and made a hat-trick !!!`);
    }else {
        console.log(`He has scored ${numGoals} goals.`)
    }
 
}
    





check(["Neymar",
"2",
"Ronaldo",
"1",
"Messi",
"3",
"END"])
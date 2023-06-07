function check(input) {


    let index = 0;
    let name = input[index];
    index++;
    let RealPassword = input[index];
    index++;
    let EnteredPassword = input[index];
    index++;

    while (EnteredPassword !== RealPassword){
        EnteredPassword = input[index];
        index++;
    }

    console.log("Welcome " + name + "!" )


    
}
check(["Gosho", "secret", "secret"])
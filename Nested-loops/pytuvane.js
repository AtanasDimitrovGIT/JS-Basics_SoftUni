function check(input) {


    let index = 0;
    let destination = input[index];
    index++;
    
    let neededSum = Number(input[index]);
    index++;

    let sum = 0;

    let isEnd = false;

    while (destination !== "End"){
        while(sum < neededSum){
            let moneySaved = (input[index]);
            index++;
            if (moneySaved !== "End"){
                moneySaved = Number(input[index]);
            } else {
                isEnd = true;
                break;
            }
            index++;
            sum = sum + moneySaved;            

        }
        if(isEnd){
            break;
        }
        console.log("Going to " + destination + "!");

        destination = input[index];
        index++;
        neededSum = Number(input[index]);
        index++;
        sum = 0;

        

    }
    
}
check(["Greece",

"1000",

"200",

"200",

"300",

"100",

"150",

"240",

"Spain",

"1200",

"300",

"500",

"193",

"423",

"End"])
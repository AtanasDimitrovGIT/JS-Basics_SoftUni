function check(input) {

    let number = Number(input[0]);
    let index = 1;
    let sum = 0;

    while(sum < number){

        let NextNum = Number(input[index]);
        sum = sum + NextNum;
        index++;
    }
    console.log(sum);
    
}
check(["20", "1", "2", "3", "4", "5", "6"])
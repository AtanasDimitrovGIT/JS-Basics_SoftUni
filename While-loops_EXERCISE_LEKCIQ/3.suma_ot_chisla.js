function check(input) {

    let firstNumber = Number(input[0]);
    let index = 1;
    let sum = 0;

    while (sum < firstNumber){
        let nextNum = Number(input[index]);
        sum = sum + nextNum;
        index++;
    }
    console.log(sum);
    
}
check(["20", "1", "2", "3", "4", "5", "6"])
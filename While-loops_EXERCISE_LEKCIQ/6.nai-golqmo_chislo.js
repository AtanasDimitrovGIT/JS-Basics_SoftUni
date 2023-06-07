function check(input) {

    let n = input[0];
    let index = 1;
    let max = Number.MIN_SAFE_INTEGER;

    while (n !== "Stop"){
        let number = Number(n);

        if (number > max){
            max = number;
        }

        n = input[index];
        index++;
    }
    console.log(max);
    
}
check(["-10", "20", "-30", "Stop"])
function check(input) {

    let n = input[0];
    let min = Number.MAX_SAFE_INTEGER
    index = 1;

    while (n !== "Stop"){
        let num = Number(n);
        if (num < min){
            min = num;
        }
        n = input[index];
        index++
    }
    console.log(min);

    
}
check(["45", "-20", "7", "99", "Stop"])
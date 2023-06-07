function check(input) {

    let n = Number(input[0]);
    let current = 1;
    let isBigger = false;
    let printCurrentLine = "";

    for (let row = 1; row <= n; row++){
        for (let columns = 1; columns = row; columns++){
            if (current > n){
                isBigger = true;
                break;
            }
            printCurrentLine += current + " ";
            current++;
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if (isBigger){
            break;
        }
    }
    
}

check(["7"])
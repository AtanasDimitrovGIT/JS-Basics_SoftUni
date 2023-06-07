function check(input) {

    let n = Number(input[0]);
    let m = Number(input[1]);
    let sum = 0;
    let outputNumbers = '';
    
    for (let i = n; i < m; i++){
        if(i % 9 === 0){
            sum = sum + Number(i);
            outputNumbers = outputNumbers + Number(i) + "\n";
        }
    }

    console.log(sum);
    console.log(outputNumbers);
}

check(["100", "200"])
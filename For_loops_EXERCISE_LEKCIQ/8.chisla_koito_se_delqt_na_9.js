function check(input) {

    let n = Number(input[0]);
    let m = Number(input[1]);
    let sum = 0;
    let output = '';

    for (let i = n; i < m; i++){
        if (i % 9 === 0){
            sum = sum + Number(i);
            output = output + Number(i) + "\n";
        }
    }
    console.log(sum);
    console.log(output);
    
}
check(["100", "200"])
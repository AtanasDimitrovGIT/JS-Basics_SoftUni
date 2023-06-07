function check(input) {

    let n = input[0];
    let sum = 0;

    for (let i = 0; i < n.length; i++){
        let number = Number(n.charAt(i));
        sum = sum + number;
    }
    console.log(sum);

    
}
check(["1234"])
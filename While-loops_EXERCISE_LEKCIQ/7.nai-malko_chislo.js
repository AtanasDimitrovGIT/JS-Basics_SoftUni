function check(input) {

    let n = input[0];
    let index = 1;
    let min = Number.MAX_SAFE_INTEGER;

    while (n !== "Stop"){
        let number = Number(n);

        if (number < min){
            min = number;
        }
        n = input[index];
        index++;
    }
    console.log(min);
    
}
check(["100",

"99",

"80",

"70",

"Stop"])
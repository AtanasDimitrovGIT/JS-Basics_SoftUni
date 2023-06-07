function check(input) {

    let username = input[0];
    let password = input[1];
    let index = 2;
    let tryPassword = input[index]
    index++;

    while (password !== tryPassword){
        tryPassword = input[index];
        index++;

    }
    console.log(`Welcome ${username}!`);
    
}
check(["Gosho", "secret", "secret"])
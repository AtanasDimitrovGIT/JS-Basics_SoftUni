function time(input) {
    
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let totalTime = num1 * 60 + num2 + 15;

    let hours = Math.floor(totalTime / 60);
    let minutes = totalTime % 60;

    if (minutes < 10){
        console.log(hours + ":" + "0" + minutes);
    } else {
        console.log(hours + ":" + minutes);

    }
    
    
}
time(["1",

"46"])
time(["0", "01"])
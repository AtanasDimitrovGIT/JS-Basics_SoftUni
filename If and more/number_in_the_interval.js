function checkNumber(input) {
   
    let num = Number(input[0]);

    if (num > -100  && num < 100 && num !== 0){
        console.log("Yes")        
    }
    else {
        console.log("No")
    }
}
checkNumber(["-25"])
checkNumber(["0"])
checkNumber(["25"])
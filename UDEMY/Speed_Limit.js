
function checkLimit(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint){
        console.log("You are OK!");
        return
    }
    const points = ((speed - speedLimit) / kmPerPoint );
    if (points >= 12)
    console.log("Your license is suspended");
    else
    console.log("Points", points)
}    



    
checkLimit(160)
function timeCheck(input) {

    let recordSeconds = Number(input[0]);
    let meters = Number(input[1]);
    let timeForMeter = Number(input[2]);

    let totalSeconds = meters * timeForMeter;
    let timeLost = (meters / 15) * 12.5;
    let totalTime = totalSeconds + timeLost;

    if (totalTime > recordSeconds){
        console.log("No, he failed! He was " + (totalTime - recordSeconds).toFixed(2) + " seconds slower.")
    }
    else if (totalTime < recordSeconds){
        console.log("Yes, he succeeded! The new record is " + totalTime.toFixed(2) + " seconds.")
    }
}
timeCheck(["10464",

"1500",

"20"])

timeCheck(["55555.67",

"3017", "5.03"])
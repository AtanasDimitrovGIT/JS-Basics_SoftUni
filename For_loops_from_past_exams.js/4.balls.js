function check(input) {

    let numOfBalls = Number(input[0]);
    let otherColoursPicked = 0;
    let totalPoints = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let divedesFromBlackBalls = 0;

    for (i = 1; i < input.length; i++){
        let ballColour = input[i];

        if (ballColour !== "red" && ballColour !== "orange" && ballColour !== "yellow" && ballColour !== "white" && ballColour !== "black"){5
            otherColoursPicked++;
            continue;
        } 
        else {
            switch (ballColour) {
                case "red":
                    totalPoints = totalPoints + 5;
                    redBalls++;
                    break;
                case "orange":
                    totalPoints = totalPoints + 10;
                    orangeBalls++;
                    break;
                case "yellow":
                    totalPoints = totalPoints + 15;
                    yellowBalls++;
                    break;
                case "white":
                    totalPoints = totalPoints + 20;
                    whiteBalls++;
                    break; 
                case "black":
                    totalPoints = totalPoints / 2;
                    divedesFromBlackBalls++;
                    break;           
                default:
                    break;
            }
        }
    }

    console.log(`Total points: ${Math.floor(totalPoints)}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherColoursPicked}`);
    console.log(`Divides from black balls: ${divedesFromBlackBalls}`)
}

check(["3",
"white",
"black",
"pink"])
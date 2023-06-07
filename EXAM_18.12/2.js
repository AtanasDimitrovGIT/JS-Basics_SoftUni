function check(input) {
    
    let widhtOfSpaceship = Number(input[0]);
    let lengthOfSpaceship = Number(input[1]);
    let heightOfSpaceship = Number(input[2]);
    let averageHeightOfAustronauts = Number(input[3]);

    let volumeSpacheship = widhtOfSpaceship * lengthOfSpaceship * heightOfSpaceship;
    let volumeRoom = (averageHeightOfAustronauts + 0.40) * 2 * 2;
    let spaceAvailable = volumeSpacheship / volumeRoom;

    if (Math.floor(spaceAvailable) >= 3 && Math.floor(spaceAvailable <= 10)){
        console.log(`The spacecraft holds ${Math.floor(spaceAvailable)} astronauts.`);
    }
    else if (Math.floor(spaceAvailable) < 3){
        console.log(`The spacecraft is too small.`);
    }
    else if (Math.floor(spaceAvailable) > 10){
        console.log(`The spacecraft is too big.`)
    }
    

}
check(["4.5",
"4.8",
"5",
"1.75"])
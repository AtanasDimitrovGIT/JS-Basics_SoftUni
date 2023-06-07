function checkTime(input) {

    let nameOfSeries = input[0];
    let timeOfEpisode = Number(input[1]);
    let durationOfRest = Number(input[2]);

    let timeForLunch = durationOfRest * (1 / 8);
    let timeForRest = durationOfRest * (1 / 4);
    let timeLeft = durationOfRest - timeForLunch - timeForRest;
    
    if (timeLeft >= timeOfEpisode){
        console.log("You have enough time to watch " + nameOfSeries + " and left with " + Math.ceil(timeLeft - timeOfEpisode) + " minutes free time.");
    }
    else if (timeLeft < timeOfEpisode){ 
        console.log("You dont have enough time to watch " + nameOfSeries + ", you need " + Math.ceil(timeOfEpisode - timeLeft) + " more minutes.")
    }
}
checkTime(["Game of Thrones",

"60",

"96"])

checkTime(["Teen Wolf",

"48",

"60"])
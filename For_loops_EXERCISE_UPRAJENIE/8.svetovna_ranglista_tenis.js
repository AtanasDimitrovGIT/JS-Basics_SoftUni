function check(input) {

    let numOfTournaments = Number(input[0]);
    let startingPoints = Number(input[1]);
    let finalPoints = 0;
    let averagePoints = 0;
    let wonTournaments = 0;


    for (let i = 2; i < input.length; i++){
        let gameOutcome = input[i];
        switch (gameOutcome) {
            case "W":
                finalPoints = finalPoints + 2000;
                averagePoints = averagePoints + 2000
                wonTournaments++;
                break;
            
            case "F":
                finalPoints = finalPoints + 1200;
                averagePoints = averagePoints + 1200;
                break;

            case "SF":
                finalPoints = finalPoints + 720;
                averagePoints = averagePoints + 720;
                break;

            default:
                break;
        }

    }
    let totalPoints = startingPoints + finalPoints;

    let average = averagePoints / numOfTournaments;
    let numOfWonTournaments = (wonTournaments / numOfTournaments) * 100;
    

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${average}`);
    console.log(`${numOfWonTournaments}%`);

    
}
check(["5",

"1400",

"F",

"SF",

"W",

"W",

"SF"])
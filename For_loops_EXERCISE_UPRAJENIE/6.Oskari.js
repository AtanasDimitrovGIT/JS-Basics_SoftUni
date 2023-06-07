function check(input) {

    let actorName = input[0];
    let pointsFromAcademy = Number(input[1]);
    let JudgeCount = Number(input[2]);

    for (let i = 3; i < input.length; i += 2 ){
        let JudgeName = input[i];
        let JudgePoints = Number(input[i + 1]);
        let result = JudgeName.length * JudgePoints / 2;
        pointsFromAcademy = pointsFromAcademy + result;

        if (pointsFromAcademy > 1250.5){
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${pointsFromAcademy}!`);
            return;
        }
        
    }

    let neededPoints = 1250.5 - pointsFromAcademy;
    console.log(`Sorry, ${actorName} you need ${neededPoints} more!`)
 

    


    
}
check(["Zahari Baharov",

"205",

"4",

"Johnny Depp",

"45",

"Will Smith",

"29",

"Jet Lee",

"10",

"Matthew Mcconaughey",

"39"])
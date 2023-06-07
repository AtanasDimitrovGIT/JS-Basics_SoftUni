function check(input) {

    let index = 0;
    let maxBadGrades = Number(input[index]);
    index++;
    let nameOfExercise = input[index];
    index++;
    let markOfExercise = Number(input[index]);
    index++;

    let badMarks = 0;
    let gradesSum = 0;
    let gradesCount = 0;
    let lastProblem = '';


    while(nameOfExercise !== "Enough"){
        lastProblem = nameOfExercise;

        if(markOfExercise <= 4){
           badMarks++;
        }
        
        if(badMarks === maxBadGrades){
            console.log("You need a break, " + badMarks + " poor grades.")
            return;
            
        }

        gradesSum = gradesSum + markOfExercise;
        gradesCount++;

        nameOfExercise = input[index];
        index++;

        markOfExercise = Number(input[index]);
        index++;


    }
    
    let avgScore = gradesSum / gradesCount;
    console.log("Average score: " + avgScore.toFixed(2));
    console.log("Number of problems: " + gradesCount);
    console.log("Last problem: " + lastProblem);
    


    
}

check(["3",

"Money",

"6",

"Story",

"4",

"Spring Time",

"5",

"Bus",

"6",

"Enough"])
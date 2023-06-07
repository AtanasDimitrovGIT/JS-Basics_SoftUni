function check(input) {

    let index = 0;
    let badGradesPossible = Number(input[index]);
    index++;
    let nameOfExercise = input[index];
    index++;
    let gradeOfExercise = Number(input[index]);
    index++;

    let badGradesCounter = 0;
    let gradesSum = 0;
    let gradesCount = 0;
    let lastExercise = '';

    while (nameOfExercise !== "Enough"){
        lastExercise = nameOfExercise;

        if (gradeOfExercise <= 4){
            badGradesCounter++;
        }
        if (badGradesCounter === badGradesPossible){
            console.log("You need a break, " + badGradesCounter + " poor grades.");
            return;
        }

        gradesSum = gradesSum + gradeOfExercise;
        gradesCount++;

        nameOfExercise = input[index];
        index++;
        gradeOfExercise = Number(input[index]);
        index++;
    }
 
    let averageGrade = gradesSum / gradesCount;
    console.log(`Average score: ${averageGrade}`);
    console.log(`Number of problems: ${gradesCount}`);
    console.log(`Last problem: ${lastExercise}`);

    
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
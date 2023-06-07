function check(input) {


    let index = 0;
    let studentName = input[index];
    index++;
    let year = 1;
    let examFailed = 0;
    let gradeCounter = 0;
    let excluded = false;

    while (year <= 12){
        let studentGrade = Number(input[index]);
        index++;

        if (studentGrade < 4){
            examFailed++;
            if (examFailed == 2){
                excluded = true;
                break;
            }
            continue;
        }
        gradeCounter = gradeCounter + studentGrade;
        year++;
    }

    if (excluded == false){
        let averageGrade = gradeCounter / 12;
        console.log(`${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`)
    }
    else {
        console.log(`${studentName} has been excluded at ${year} grade`)
    }



}
check(["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"])
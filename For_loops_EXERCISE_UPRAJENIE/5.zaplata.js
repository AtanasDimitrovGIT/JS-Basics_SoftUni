function check(input) {

    let salary = Number(input[1]);
    
    for (let i = 2; i < input.length; i++){
        if (input[i] === "Facebook"){
            salary = salary - 150;
        }
        else if (input[i] === "Instagram"){
            salary = salary - 100;
        }
        else if (input[i] === "Reddit"){
            salary = salary - 100;
        }

    }

    if (salary <= 0){
        console.log(`You have lost your salary.`);
    }
    else{
        console.log(salary);
        
    }
    
}
check(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"])
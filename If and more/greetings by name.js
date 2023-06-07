function person(input) {
    let first_name = input[0];
    let last_name = input[1];
    let age = input[2];
    let home_town = input[3];
    console.log("You are " + first_name + " " + last_name + "," + " a " + age + " years old person from " + home_town + "." );

    
}

person(["Petar","Petrov", "24", "Sofia"])
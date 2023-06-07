function typeOfFigures(input) {
    let type = input[0];
    let num1 = Number(input[1]);
    let num2 = Number(input[2]);

    if (type == "square"){
        let s_square = num1 * num1;
        console.log(s_square.toFixed(3));
    }
    if (type == "rectangle"){
        let s_rectangle = num1 * num2
        console.log(s_rectangle.toFixed(3));
    }
    if (type == "circle"){
        let s_circle = (num1 * num1) * Math.PI
        console.log(s_circle.toFixed(3));
    }
    if (type == "triangle"){
        let s_triangle = (num1 * num2) / 2
        console.log(s_triangle.toFixed(3));
    }
    
}
typeOfFigures(["square", "5"])
typeOfFigures(["rectangle", "7", "2.5"])
typeOfFigures(["triangle", "4.5", "20"])
typeOfFigures(["circle", "6"])

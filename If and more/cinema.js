function cinema(input) {

    let typeOfProjection = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let income = 0;

    if (typeOfProjection == "Premiere"){
        income = (rows * columns) * 12;
        console.log(income.toFixed(2))
    }
    else if (typeOfProjection == "Normal"){
        income = (rows * columns) * 7.50;
        console.log(income.toFixed(2))

    }
    else if (typeOfProjection == "Discount"){
        income = (rows * columns) * 5;
        console.log(income.toFixed(2))

    }

    
}
cinema(["Discount", "12", "30"])
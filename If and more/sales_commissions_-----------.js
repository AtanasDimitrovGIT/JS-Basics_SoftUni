function solve(input) {

    let town = input[0];
    let sales = Number(input[1]);
    let price = 0;

    if (town == "Sofia"){
        if (sales <= 0 && sales <= 500){
            price = sales * 0.05;
            console.log(price.toFixed(2));
        }
        else if (sales > 500 && sales <= 1000){
            price = sales * 0.07;
            console.log(price.toFixed(2));
        }
        else if (sales > 1000 && sales <= 10000){
            price = sales * 0.08;
            console.log(price.toFixed(2));
        }
        else if (sales > 10000){
            price = sales * 0.12;
            console.log(price.toFixed(2));
        }
        else{
            if(town !== "Sofiq"){
                console.log("error")
            }
        }
    }

    if (town == "Varna"){
        if (sales <= 0 && sales <= 500){
            price = sales * 0.45;
            console.log(price.toFixed(2));
        }
        else if (sales > 500 && sales <= 1000){
            price = sales * 0.75;
            console.log(price.toFixed(2));
        }
        else if (sales > 1000 && sales <= 10000){
            price = sales * 0.10;
            console.log(price.toFixed(2));
        }
        else if (sales > 10000){
            price = sales * 0.13;
            console.log(price.toFixed(2));
        }
        else{
            if (town !== "Varna"){
                console.log("error");
        }
    }

    if (town == "Plovdiv"){
        if (sales <= 0 && sales <= 500){
            price = sales * 0.55;
            console.log(price.toFixed(2));
        }
        else if (sales > 500 && sales <= 1000){
            price = sales * 0.8;
            console.log(price.toFixed(2));
        }
        else if (sales > 1000 && sales <= 10000){
            price = sales * 0.10;
            console.log(price.toFixed(2));
        }
        else if (sales > 10000){
            price = sales * 0.145;
            console.log(price.toFixed(2));
        }
        else{
            if (town !== "Plovdiv"){
                console.log("error")
            }
        }


    }
        

    
}
    
    

}
        

        
    

solve(["Kaspichan", "-50"])
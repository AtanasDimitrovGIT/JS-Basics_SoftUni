function budgetForFilm(input) {

let budget = Number(input[0]);
let numberOfStatist = Number(input[1]);
let priceForCostumes = Number(input[2]);
let decor = budget * 0.10;



let TotalPriceForCostumes = priceForCostumes * numberOfStatist;
let newPriceForCostumes = undefined;

if (numberOfStatist > 150){
TotalPriceForCostumes = TotalPriceForCostumes - (TotalPriceForCostumes * 0.10);
}

let totalSumForFilm = decor + TotalPriceForCostumes;

if (totalSumForFilm > budget){
    console.log("Not enough momey!");
    console.log("Wingard needs " + (totalSumForFilm - budget).toFixed(2) + " leva " + "more.");
}
else if (budget >= totalSumForFilm){
    console.log("Action!");
    console.log("Wingard starts filming with " + (budget - totalSumForFilm).toFixed(2) + " leva " + "left.")
}

}
    


budgetForFilm(["20000",

"120",

"55.5"])

budgetForFilm(["15437.62",

"186",

"57.99"])

budgetForFilm(["9587.88",

"222",

"55.68"])
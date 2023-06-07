function check(input) {

    let numOfPeople = Number(input[0]);
    let taxEntrance = Number(input[1]);
    let priceForSunbed = Number(input[2]);
    let priceForUmbrella = Number(input[3]);

    let fullTax = taxEntrance * numOfPeople;
    let sunBedEnjoyers = Math.ceil(numOfPeople * 0.75) * priceForSunbed;
    let umbrellaEnjoyers = Math.ceil(numOfPeople * 0.50) * priceForUmbrella;

    let endTax = fullTax + sunBedEnjoyers + umbrellaEnjoyers;
    console.log(endTax.toFixed(2) + " lv.");

    
}

check(["100",
"8",
"6",
"4"])
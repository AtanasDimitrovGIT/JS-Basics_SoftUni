function check(input) {

    let procentFat = Number(input[0]);
    let procentProteins = Number(input[1]);
    let procentCarbs = Number(input[2]);
    let totalCals = Number(input[3]);
    let procentWater = Number(input[4]);

    let fullFats = (totalCals * (procentFat / 100)) / 9;
    let fullProtein = (totalCals * (procentProteins / 100)) / 4;
    let fullCarbs = (totalCals * (procentCarbs / 100)) / 4;
    let fullGr = fullCarbs + fullProtein + fullFats;
    let calForGram = totalCals / fullGr;
    let something = 1 - (procentWater / 100) ;
    let something2 =  calForGram * something;

    console.log(something2.toFixed(4));


    

    
}
check(["60",
"25",
"15",
"2500",
"60"])
function check(input) {

    let naylon = Number(input[0]);
    let paint = Number(input[1]);
    let razreditel = Number(input[2]);
    let hoursNeed = Number(input[3]);

    let priceForNaylon = (naylon + 2) * 1.50;
    let priceForPaint = (paint + (paint * 0.10)) * 14.50;
    let priceForRazreditel = razreditel * 5;
    let sumForBags = 0.40;
    let FullSum = priceForNaylon + priceForPaint + priceForRazreditel + sumForBags;
    let sumForWorkers = (FullSum * 0.30) * hoursNeed;
    let FullFullSum = FullSum + sumForWorkers;

    console.log(FullFullSum);

    
}
check["10 ",

"11 ",

"4 ",

"8 "]
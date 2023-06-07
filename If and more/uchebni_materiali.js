function check(input) {

    let numPacksPens = Number(input[0]);
    let numPacksMarkers = Number(input[1]);
    let litresPreparat = Number(input[2]);
    let discount = Number(input[3]);

    let priceForPen = numPacksPens * 5.80;
    let priceForMarkers = numPacksMarkers * 7.20;
    let priceForPreparat = litresPreparat * 1.20;
    let price = priceForMarkers + priceForPen + priceForPreparat
    let fullPrice = price - price * (discount / 100);

    console.log(fullPrice);
    
}
check["2 ",

"3 ",

"4 ",

"25 "]
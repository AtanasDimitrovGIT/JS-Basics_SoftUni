function check(input) {
    
    let priceGPU = Number(input[0]);
    let pricePrehodnik = Number(input[1]);
    let electricityConsuptionPerGPU = Number(input[2]);
    let profitPerGPU = Number(input[3]);

    let fullPriceGPU = priceGPU * 13;
    let fullPricePrehodnik = pricePrehodnik * 13;
    let spentMoney = fullPriceGPU + fullPricePrehodnik + 1000;
    let priceProfitPerGPU = profitPerGPU - electricityConsuptionPerGPU;

    let fullProfitFromGPU = priceProfitPerGPU * 13;
    let daysForReturn = spentMoney / fullProfitFromGPU;

    console.log(spentMoney);
    console.log(Math.ceil(daysForReturn))
}
check(["700",
"15",
"0.20",
"2"])
function christmasGifts(input) {

    let index = 0;
    let ageOfPerson = input[index];
    index++;
    let numberOfAdults = 0;
    let numberOfKids = 0;
    let moneyForToys = 0;
    let moneyForSweaters = 0;

    while (ageOfPerson !== "Christmas") {
        ageOfPerson = Number(ageOfPerson);

        if (ageOfPerson <= 16) {
            numberOfKids++;
        }
        else {
            numberOfAdults++;
        }

        ageOfPerson = input[index];
        index++;

    }
    moneyForToys = numberOfKids * 5;
    moneyForSweaters = numberOfAdults * 15

    console.log(`Number of adults: ${numberOfAdults}`);
    console.log(`Number of kids: ${numberOfKids}`);
    console.log(`Money for toys: ${moneyForToys}`);
    console.log(`Money for sweaters: ${moneyForSweaters}`);


}
christmasGifts(["16",
    "20",
    "46",
    "12",
    "8",
    "20",
    "49",
    "Christmas"])
function check(input) {
    let capacity = Number(input[0]);
    let index = 1;
    let volumeOfCase = input[index];
    let suitcase = 0;
    let totalVolume = 0;

    while (volumeOfCase !== "End") {
        volumeOfCase = Number(volumeOfCase);

        if (capacity < volumeOfCase) {
            console.log("No more space!");
            break;
        }

        capacity -= volumeOfCase;
        totalVolume += volumeOfCase;
        suitcase++;

        if (suitcase % 3 === 0) {
            capacity -= volumeOfCase * 0.1;
        }

        volumeOfCase = input[++index];
    }

    if (volumeOfCase === "End") {
        console.log("Congratulations! All suitcases are loaded!");
    }

    console.log(`Statistic: ${suitcase} suitcases loaded.`);
}
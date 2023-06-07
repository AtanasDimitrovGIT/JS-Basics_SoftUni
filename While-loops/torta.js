function check(input) {
    
    let cakeWidth = Number(input[0])

    let cakeLength = Number(input[1]);

    let index = 2;
    let piecesTaken = input[index];
    index++;

    numOfPieces = cakeWidth * cakeLength;
    

    while (piecesTaken !== "STOP"){
        numOfPieces = Number(numOfPieces);
        numOfPieces = numOfPieces - piecesTaken;

        if (numOfPieces < 0){
            console.log("No more cake left! You need " + Math.abs(numOfPieces) + " pieces more.");
            return;
        }

        piecesTaken = input[index];
        index++;


    }
    console.log(numOfPieces + " pieces are left.");




}

check(["10",

"10",

"20",

"20",
"20", "20", "21"])
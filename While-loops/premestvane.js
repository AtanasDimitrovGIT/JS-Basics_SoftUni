function check(input) {

    let freeSpaceWidth = Number(input[0]);
    let freeSpaceLenght = Number(input[1]);
    let freeSpaceHeight = Number(input[2]);

    let index = 3;
    let numberOfBoxes = (input[index]);
    index++;

    let totalSpaceAvailable = freeSpaceHeight * freeSpaceLenght * freeSpaceWidth;

    while (numberOfBoxes !== "Done"){
        numberOfBoxes = Number(numberOfBoxes)
        totalSpaceAvailable = totalSpaceAvailable - numberOfBoxes
        
        if (numberOfBoxes < 0){
            console.log("No more free space! You need " + Math.abs(totalSpaceAvailable) + " Cubic meters more.")
        }
        numberOfBoxes = input[index];
        index++;

    }
    console.log(totalSpaceAvailable + " Cubic meters left.")

    

   
    
}
check(["10",

"1",

"2",

"4",

"6",

"Done"])
function check(input) {

    let startOfInterval = Number(input[0]);
    let endOfInterval = Number(input[1]);
    let magicNumber = Number(input[2]);
    let counter = 0;
    let isMagicNumber = false;

    for (let i = startOfInterval; i <= endOfInterval; i++){
        for (let z = startOfInterval; z <= endOfInterval; z++){
            counter++;
            if (i + z === magicNumber){
                console.log(`Combination N:${counter} (${i} + ${z} = ${magicNumber})`);
                isMagicNumber = true;
                break;
            }
        }
        if (isMagicNumber){
            break;
        }
    }
    if (isMagicNumber === false){
        console.log(`${counter} combinations - neigher equals ${magicNumber}`)
    }
    
    
}
check(["23",

"24",

"20"])
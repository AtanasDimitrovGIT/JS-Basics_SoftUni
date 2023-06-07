function check(input){

    let numPaintedEggs = Number(input[0]);
    let redCounter = 0;
    let orangeCounter = 0;
    let blueCounter = 0;
    let greenCounter = 0;
    let maxEggs = Number.MIN_SAFE_INTEGER;
    let maxColor = "";
    

    for (let i = 1; i <= numPaintedEggs; i++){
        let colour = input[i];
        switch(colour) {
            case "red":
                redCounter++;
                if (redCounter > maxEggs){
                    maxEggs = redCounter;
                    maxColor = colour;
                }    
            
            
            case "orange":
            orangeCounter++;
                if (orangeCounter > maxEggs){
                    maxEggs = orangeCounter;
                    maxColor = colour;
                }
                break;
            

            case "blue":
            blueCounter++;
                if (blueCounter > maxEggs){
                    maxEggs = blueCounter;
                    maxColor = colour;
                }
                break;
            
            case "green":
                greenCounter++;
                if (greenCounter > maxEggs){
                    maxEggs = greenCounter;
                    maxColor = colour;
                }   
                break;

            default:
                break;
        }
        
    }
    console.log(`Red eggs: ${redCounter}`);
    console.log(`Orange eggs: ${orangeCounter}`);
    console.log(`Blue eggs: ${blueCounter}`);
    console.log(`Green eggs: ${greenCounter}`);
    console.log(`Max eggs: ${maxEggs} -> ${maxColor}`)   

    
}

check(["7", "orange","blue", "green", "green", "blue", "red", "green"])

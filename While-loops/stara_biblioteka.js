function check(input) {


    let wantedBook = input[0];
    let index = 1;
    let newBook = input[index];
    index++;
    let booksChecked = 0;
    

    while(newBook !== "No More Books"){
        if (newBook === wantedBook){
            console.log("You checked " + booksChecked + " books and found it.");
            return;        
        }
        booksChecked ++;
        
        newBook = input[index];
        index++;
    }
    console.log("The book you search is not here!");
    console.log("You checked " + booksChecked + " books.")
    
}

check(["The Spot",

"Hunger Games",

"Harry Potter",

"Torronto",

"Spotify",

"No More Books"])
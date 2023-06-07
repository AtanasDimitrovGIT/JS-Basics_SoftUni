function books(input) {

    let number_of_pages = Number(input[0]);
    let pages_read_per_hour = Number (input[1]);
    let days = Number(input[2]);
    let must_read = (number_of_pages / pages_read_per_hour) / 2;
    console.log(must_read);

    
}
books(["212","20", "2"])
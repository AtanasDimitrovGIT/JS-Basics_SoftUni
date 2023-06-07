function fish_tank(input) {

    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let hight = Number(input[2]);
    let procent = Number(input[3]);

    let volume_of_fishtank = lenght * width * hight;
    let volume_in_litres = volume_of_fishtank * 0.001;
    let taken_space = 0.17;
    let needed_litres = volume_in_litres * (1 - taken_space);

    console.log(needed_litres)

    
}
fish_tank(["85", "75","47", "17"])
function food(input) {
    let chicken_menu = Number(input[0]);
    let fish_menu = Number(input[1]);
    let vegeterian_menu = Number(input[2]);
    let total_menu_sum = (chicken_menu * 10.35) + (fish_menu * 12.40) + (vegeterian_menu * 8.15);
    let desert_price = total_menu_sum * 0.20; 
    let total_price = total_menu_sum + desert_price + 2.50;
    
    console.log(total_price);

}

food(["2","4","3"])
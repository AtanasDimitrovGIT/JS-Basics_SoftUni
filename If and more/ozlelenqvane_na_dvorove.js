function check(input) {

    let cubicM = Number(input[0]);

    let price = cubicM * 7.61;
    let discount = price * 0.18;
    let fullPrice = price - discount;

    console.log("The final price is: " + fullPrice + " lv.")
    console.log("The discount is: " + discount + " lv.")
    
}
check["550"]
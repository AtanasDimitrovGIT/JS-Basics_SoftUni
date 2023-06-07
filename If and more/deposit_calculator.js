function deposit_calculator(input) {

    let deposit_amount = Number(input[0]);
    let deposit_deadline = Number(input[1]);
    let yearly_procent = Number(input[2]);
    let yearly_procent_decimal = yearly_procent / 100;
    sum = deposit_amount + (deposit_deadline * (deposit_amount * yearly_procent_decimal) / 12);
    console.log(sum);
    
}

deposit_calculator(["200", "3", "5.7"])
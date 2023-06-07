function check(input) {


    let totalGroups = Number(input[0]);
    let MusalaGroup = 0;
    let MonblanGroup = 0;
    let KilimandjaroGroup = 0;
    let k2Group = 0;
    let EverestGroup = 0;


    
    for (let i = 1 ; i < input.length; i++){
        let numOfPeopleInGroup = Number(input[i]);
        if (numOfPeopleInGroup <= 5){
            MusalaGroup = MusalaGroup + numOfPeopleInGroup;
        }
        else if (numOfPeopleInGroup >= 6 && numOfPeopleInGroup <= 12){
            MonblanGroup = MonblanGroup + numOfPeopleInGroup;
        }
        else if (numOfPeopleInGroup >= 13 && numOfPeopleInGroup <= 25){
            KilimandjaroGroup = KilimandjaroGroup + numOfPeopleInGroup;
        }
        else if (numOfPeopleInGroup >= 26 && numOfPeopleInGroup <= 40){
            k2Group = k2Group + numOfPeopleInGroup;
        }
        else if (numOfPeopleInGroup > 40){
            EverestGroup = EverestGroup + numOfPeopleInGroup;
        }
        
    }

    let allPeople = MusalaGroup + MonblanGroup + KilimandjaroGroup + k2Group + EverestGroup;
 
    console.log(`${((MusalaGroup / allPeople) * 100 ).toFixed(2)}%`);
    console.log(`${((MonblanGroup / allPeople) * 100 ).toFixed(2)}%`);
    console.log(`${((KilimandjaroGroup / allPeople) * 100 ).toFixed(2)}%`);
    console.log(`${((k2Group / allPeople) * 100 ).toFixed(2)}%`);
    console.log(`${((EverestGroup / allPeople) * 100 ).toFixed(2)}%`);


    
}
check(["5",

"25",

"41",

"31",

"250",

"6"])
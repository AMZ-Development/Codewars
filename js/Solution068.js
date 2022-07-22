//PREP
//We receive 8 ages (integers)
//To get the result of the problem, we must follow the following steps:
//Multiply each age by itself
//Add the results
//Square root the result
//Divide by two
//Round down to the nearest integer


function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    return Math.floor(Math.sqrt((age1 * age1) + (age2 * age2) + (age3 * age3) + (age4 * age4) + (age5 * age5) + (age6 * age6) + (age7 * age7) + (age8 * age8)) / 2);
}


//Tests
console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45)); //Output: 86
console.log(predictAge(60, 60, 75, 45, 67, 68, 64, 70)); //Output: 90
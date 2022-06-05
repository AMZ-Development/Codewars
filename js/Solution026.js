//PREP
//We will receive a string of DIGITS
//Any digit below 5 will be replaced with a 0
//Any digit is 5 or greater will be replaced with a 1
//Return the resulting string
//String will always be populated
//All digits will be integer numbers


function fakeBin(x){
    //create an array that splits all the integers into single elements
    let newArr= x.split('');
    //create a new empty array(we will call this array binCode), where we will insert all the 1s and 0s 
    let binCode = [];
    //check all the elements in the array created from the string
    for(let i = 0; i < newArr.length; i++){
    //check if the number is below 5 and insert a 0 into the binCode array
        if(newArr[i] < 5){
            binCode.push(0);
    //check if the number is equal to or greater than 5 and insert a 1 into the binCode array
        } else{
            binCode.push(1);
        }
    }
    //join the binCode array into a string and return it
    return binCode.join('');
}

//TEST
console.log(fakeBin('45385593107843568')); //output: '01011110001100111'

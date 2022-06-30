//PREP
//We will receive a string
//We will replace the following:
//5 with 'S'
//0 with 'O'
//1 with 'I'
//return the new string


function correct(string){
    string = string.replace(/0/g, 'O'); 
    string = string.replace(/1/g, 'I');
    string = string.replace(/5/g, 'S');
    return string;
}


//TESTS
console.log(correct("L0ND0N")); //Output:    "LONDON");
console.log(correct("DUBL1N")); //Output:    "DUBLIN");
console.log(correct("51NGAP0RE")); //Output:    "SINGAPORE");
console.log(correct("BUDAPE5T")); //Output:    "BUDAPEST");
console.log(correct("PAR15")); //Output:    "PARIS");
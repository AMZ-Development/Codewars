//PREP
//We are given a string
//We need to replace each '.' (dot) character from the string with a '-' (dash)

//REGEX solution
/* 
let replaceDots = function(str){
        //look for all the '.' and replace them with '-'
    return str.replace(/\./g, '-');
} 
*/

//NON REGEX
let replaceDots = str => str.split('.').join('-');


//TEST
console.log(replaceDots("one.two.three")); //Output: "one-two-three"
//PREP
//We are given a string
//The string can be a sentence
//We are to return the string as an array
//Each element in the array will be each word of the sentence that is separated by a space
//i.e. 'hello world' should return ["hello","world"]

function stringToArray(string){
    //declare a variable that will contain the array
    let arr = []
    //separate the string when a space is present and insert it as an element into the array
    arr = string.split(' ');
    //return the array
    return arr;
}

//tests
console.log(stringToArray('Hello world')); //output: ['Hello','world']
console.log(stringToArray('I hope you\'re doing well!')); //output: ['I','hope',"you're",'doing','well!']
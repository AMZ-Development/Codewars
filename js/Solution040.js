//PREP
//We will receive 3 integers that will always be between 1 and 10(incluiding those)
//We will insert a combination of the following: +, * and ()
//We will try every combination of the three integers and the three operators/brackets
//RETURN the maximum number possible of the result of the combinations


function expressionMatter(a, b, c){
    //Declare an array to store the results of the possible combinations
    let max = [];
    //Push the results to the declared array of the possible combinations
        max.push(a *(b + c));
        max.push(a * b * c);
        max.push(a + b * c);
        max.push((a + b) * c);
        max.push(a + b + c);
    //return the maximum int that is stored in the array of results
    return Math.max(...max);
}

//TESTS
console.log(expressionMatter(2, 1, 2)); //Output: 6
console.log(expressionMatter(5, 1, 3)); //Output: 20
console.log(expressionMatter(2, 10, 3)); //Output: 60
console.log(expressionMatter(1, 10, 1)); //Output: 12


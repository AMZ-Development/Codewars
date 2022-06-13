//PREP
//We will receive an array of integers
//Ints can be positive or negative
//We will write two functions
//One function will return the max value of the array
//Another function will return the minimum value of the array

function min(list){
    return Math.min(...list);
}


function max(list){
    return Math.max(...list);
}

/* REFACTORED
const min = list => Math.min(...list);
const max = list => Math.max(...list);
*/


//tests
console.log(min([-52, 56, 30, 29, -54, 0, -110])); //Output: -110
console.log(min([42, 54, 65, 87, 0])); //Output: 0
console.log(max([4,6,2,1,9,63,-134,566])); //Output: 566
console.log(max([5])); //Output: 5

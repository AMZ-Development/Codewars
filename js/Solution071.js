//PREP
//We hace a triangle inside of a rectangle, find the area of the triangle
//area of a triangle is (b * h) / 2
//The base of the triangle is made up of a whole side of the rectangle, represented by 'a'
//The height of the triangle is represented by the midpoint of the height of the rectangle, represented by 'b'
//a and b will always be positive integers
//In this case, base = a, height = b/2
//Mulitply a * b/2
//Divide by the product by 2

/* 
function arrowArea(a,b) {
    return (a * (b / 2))/2
}
 */

//Refactored
let arrowArea = (a, b) => (a * (b / 2))/2;

console.log(arrowArea(4, 2)); //Output: 2
console.log(arrowArea(7, 6)); //Output: 10.5
console.log(arrowArea(25, 25)); //Output: 156.25
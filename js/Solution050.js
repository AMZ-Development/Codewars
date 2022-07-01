//PREP
//Given three integers, determine if a triangle can be formed 
//Ints can be negative
//In case they are able to form a triangle, return true, otherwise return false


//Use the triangle inequality theorem, which states that the sum of two sides must be greater than the third side to form a triangle
//Check two sides and compare them to the third, all sides have to be checked and be truthy
let isTriangle = (a, b, c) => a + b > c && a + c > b && b + c > a ? true : false;

//tests
console.log(isTriangle(6, 7, 9));  // Output: true
console.log(isTriangle(-6, 7, 9));  // Output: false
console.log(isTriangle(2, 5, 5));  // Output: true
console.log(isTriangle(3, 7, 10));  // Output: false

//PREP
//We will recieve an array of integers
//The array will always be populated
//We have to return the smallest integer of the array

function SmallestIntegerFinder(args) {
//sort the array from smallest to largest
      args.sort((a,b) => a - b)
//return the smallest integer
      return args[0]
}


//TESTS
console.log(SmallestIntegerFinder([-1,5,4,9,5])); //Output: -1
console.log(SmallestIntegerFinder([-1,5,-5,9,5])); //Output: -5
console.log(SmallestIntegerFinder([1,5,0,4,5])); //Output: 0
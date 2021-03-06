/* 
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/


function getAverage(marks){
    let sum = marks.reduce((acc, c) => acc + c);
    let average = sum / marks.length;
    return Math.floor(average);
  }


  //TESTS
console.log(getAverage([2,2,2,2])); //Output: 2
console.log(getAverage([1,2,3,4,5,])); //Output: 3
console.log(getAverage([1,1,1,1,1,1,1,2])); //Output: 1
//PREP
/* 
//INSTRUCTIONS:
Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

//CODE TO FIX:
function buildString(...template){
  return `I like #{template.join(',')}!`;
}
*/


function buildString(...template){
    //change # to $, and add a space after the comma
    return `I like ${template.join(', ')}!`;
  }

console.log(buildString('Cheese','Milk','Chocolate')); //Output: 'I like Cheese, Milk, Chocolate!'
console.log(buildString('Cheese','Milk')); //Output: 'I like Cheese, Milk!'
console.log(buildString('Chocolate')); //Output: 'I like Chocolate!'
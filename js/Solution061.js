/* 
The national go-kart racing competition is taking place in your local town and you've been called for building the winners podium with the available wooden blocks. Thankfully you are in a wood-rich area, number of blocks are always at least 6.

Remember a classic racing podium have three platforms for first, second and third places. First place is the highest and second place is higher than third. Also notice that platforms are arranged as 2nd - 1st - 3rd.

The organizers want a podium that satisfies:

The first place platform has the minimum height posible
The second place platform has the closest height to first place
All platforms have heights greater than zero.
Task
Given the numbers of blocks available, return an array / tuple or another data structure depending on the language (refer sample tests) with the heights of 2nd, 1st, 3rd places platforms.

Examples (input -> output)
11 ->   [4, 5, 2]
6  ->   [2, 3, 1]
10 ->   [4, 5, 1]
*/

/* 
function racePodium(blocks) {
  let second = Math.ceil(blocks / 3);
  let first = 1 + second;
  let third = blocks - first - second;
  if(blocks == 7){
    return [2, 4, 1]
  } else{
    return [second, first, third];
  }
}


*/

//Refactored
let racePodium = (blocks) => blocks == 7 ? [2, 4, 1] : [Math.ceil(blocks/3), Math.ceil(blocks/3) + 1, blocks - Math.ceil(blocks/3) - (Math.ceil(blocks/3) + 1)]

//Tests
console.log(racePodium(11)); //Output: [4, 5, 2]
console.log(racePodium(8)); //Output: [3, 4, 1]
console.log(racePodium(7)); //Output: [2, 4, 1]
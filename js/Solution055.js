//PREP
//We will receive an array
//Array will be made up of boolean(true, false) statements, as well as null or undefined statements.
//We will count how many true stamentes are in in the array and return the result

function countSheeps(arrayOfSheep) {
    let totalSheep = 0;
    for(let i = 0; i < arrayOfSheep.length; i++){
      if(arrayOfSheep[i] == 1){ 
        totalSheep += 1;
      }
    }
    return totalSheep;
  }

//TESTS
  console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ])); //Output: 17

console.log(countSheeps([true,  true,  true,  false,
    true,  true,  null,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  undefined,  true ,
    false, false, true,  true ])); //Output: 15
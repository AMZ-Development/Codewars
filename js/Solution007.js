//PREP
//We are given two parameters, lenght and width
//We should check if the lenght and width correspond to a square  or a rectangle
//In case of square return the area (l * w)
//In case of rectangle return the perimeter ((l*2) + (w*2))

const areaOrPerimeter = function(l , w) {
    if(l === w){    //check for square if length is equal to width, return area
      return l * w;
    }else{           //if lenght is not equal to wight, it will be a rectangle, return perimeter
      return (l*2) + (w*2);
    }
 };

 console.log(areaOrPerimeter(2,2));  //output: 4
 console.log(areaOrPerimeter(2,5));  //output: 14
 console.log(areaOrPerimeter(6,2));  //output: 16
 console.log(areaOrPerimeter(8,8));  //output: 64
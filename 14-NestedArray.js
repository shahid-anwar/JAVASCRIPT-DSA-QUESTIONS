
// input
// const arr1 = [
//   ["a", "b"],
//   ["c", "d"],
//   ["e", "f", ["g", "h", ["i", "j"]],
// ];

// Output
// ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

// ALGORITHM
// ARRAY HAS AN INBUILT METHOD arr.flat() WHICH CAN FLAT THE NESTED ARRAY BY JUST PASSING Infinity AS AN PARAMETERS


function nestedArr(arr1) {
    // let newArr=arr1.flat();
    // if(arr1.length==0)
    //   return [];
    // else
    // return nestedArr(arr1.flat(Infinity));
    return arr1.flat(Infinity);
  }
  
  console.log(nestedArr([
    ["a", "b"],
    ["c", "d"],
    ["e", "f", ["g", "h", ["i", "j"]]]]));
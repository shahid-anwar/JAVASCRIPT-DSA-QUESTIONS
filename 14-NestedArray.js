
// input
// const arr1 = [
//   ["a", "b"],
//   ["c", "d"],
//   ["e", "f", ["g", "h", ["i", "j"]],
// ];

// Output
// ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

// AlGORITHM
// STEP-1: CREATE A FUNCTION AND TAKE AN ARRAY AS AN INPUT.
// STEP-2: DECLARE AN OUTPUT ARRAY OUTPUTARR.
// STEP-3: CALL THE RECURSIVE FUNCTION WITH ITS PARAMETERS AS INDEX=0,INPUTARR,OUTPUTARR.
// STEP-4: RETURN THE OUTPUT ARRAY OUTPUTARR.
// STEP-5: NOW IN THE RECURSIVE FUNCTION TAKE ITS PARAMETERS AS INDEX,INPUTARR,OUTPUTARR.
// STEP-6: CHECK WHETHER THE INDEX IS GREATER THAN OR EQUAL TO INPUTARR.LENGTH OR NOT.
// STEP-6.1:RETURN IF THE CONDITION IS TRUE.
// STEP-7: CHECK WHETHER THE INPUT ARRAY IN THE INDEX IS AN ARRAY OR NOT.
// STEP-7.1:IF ITS AN ARRAY THEN CALL THE RECURSIVE FUNCTION .
// STEP-8: ELSE PUSH THE ARRAY INTO THE OUTPUT ARRAY.
// STEP-9: NOW CALL THE RECURIVE FUNCTION BUT WITH THE INDEX AS 1 MORE.


function recursiveNestedArray(inputArr)
{
  let outputArr=[];
  recursive(0,inputArr,outputArr)
  return outputArr;
}
function recursive(index,inputArr,outputArr)
{
  if(index>=inputArr.length)
    return ;
  if(Array.isArray(inputArr[index]))
  {
    recursive(0,inputArr[index],outputArr)
  }
  else
  {
    outputArr.push(inputArr[index])
  }
  recursive(index+1,inputArr,outputArr)
}

console.log(recursiveNestedArray([
  ["a", "b"],
  ["c", "d"],
  ["e", "f", ["g", "h", ["i", "j"]]]]));





// ALGORITHM
// ARRAY HAS AN INBUILT METHOD arr.flat() WHICH CAN FLAT THE NESTED ARRAY BY JUST PASSING Infinity AS AN PARAMETERS


function nestedArr(arr1) {
   
    return arr1.flat(Infinity);
  }
  
  console.log(nestedArr([
    ["a", "b"],
    ["c", "d"],
    ["e", "f", ["g", "h", ["i", "j"]]]]));
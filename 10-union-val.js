// Unique values only from 2 arrays i.e. union values
// const inputA = [1, 2, 3, 4, 5, 1];
// const inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];

// // Output
// [1, 2, 3, 4, 5, 6, 7, 8];

// ALGORITHM

// STEP-1:  TAKE AN ARRAY TO STORE RESULTANT ARRAY.
// STEP-2:  TAKE A FLAG VARIABLE.
// STEP-3:  TAKE A FOR LOOP TO TRAVERSE THE ARRAY.
// STEP-4:  PUSH THE FIRST ARRAY INTO RESULT ARRAY.
// STEP-5:  TAKE ANOTHER FOR LOOP TO TRAVERSE THE SECOND ARRAY.
// STEP-6:  TAKE ANOTHER INNER LOOP TO TRAVERSE THE RESULTANT ARRAY.
// STEP-7:  CHECK THE CONDITON IF ITS TRUE THEN BREAK
// STEP-8:  PUSH THE ARRAY TO THE RESULTANT ARRAY AND RETURN THE RESULT. 

function union(arr1, arr2) 
{
  let result1=[];
  let flag=0;
  for(let i=0;i<arr1.length;i++)
    {
      result1.push(arr1[i])
    }
  for(let j=0;j<arr2.length;j++)
    {
      flag=0;
      for(let k=0;k<result1.length;k++)
        {
          if(arr2[j]==result1[k])
          {
             flag=1;
              break;
          }
        }
      if(flag==0)
        result1.push(arr2[j]);
    }
  return result1;
  console.log(result);
}

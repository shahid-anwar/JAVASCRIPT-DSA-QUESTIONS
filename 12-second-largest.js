

// To find the second largest number in an array

// ALGORITHM
// STEP-1: TAKE A LOOP TO FIND THE LARGEST ELEMENT IN AN ARRAY AND STORE IT IN A VARIABLE.
// STEP-2: TAKE ANOTHER LOOP TO FIND THE SECOND LARGEST.
// STEP-3: SECOND LARGEST SHOULD BE GREATER THAN ALL OF THE ELEMENTS PRESENT EXCEPT THE LARGEST.
// STEP-4: RETURN THE SECOND LARGEST ELEMENT OF THE ARRAY

function secondLargest(arrNums)
{
  let fmax,smax;
  for(let i=0;i<=arrNums.length;i++)
    {
        // FINDING LARGEST
     if(arrNums[i]>arrNums[i-1]){
        fmax=arrNums[i];
    }
    
    }
  for(let j=0;j<=arrNums.length;j++)
    {
        // FINDING SECOND LARGEST
      if((arrNums[j]>arrNums[j-1])&&arrNums[j]<fmax)
        smax=arrNums[j];
    }
  return smax
}
console.log(secondLargest([1,52,66,78,44,25]))
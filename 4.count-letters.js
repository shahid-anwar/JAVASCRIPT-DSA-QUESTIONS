// AAAABBBCCD -> 4A3B2C1D

// ALGORITHM
// STEP-1: CREATE A FUNCTION NAMED COUNTFREQ AND PASS letters as PARAMETERS.
// STEP-2: CREATE AN OBJECT a{}.
// STEP-3: START A LOOP FROM I TO THE LENGTH OF THE STRING.
// STEP-4: CHECK WHETHER INTIAL VALUE IS NOT NULL.
// STEP-4.1: IF THE VALUE IS  NOT NULL THEN ASSIGN THE VALUE OF THE OBJECTa[letters[i]]+1 TO IT.
// STEP-5: ELSE ASSIGN THE VALUE TO 1
// STEP-6: THEN RETURN THE VALUE OF THE FOR LOOP OUTSIDE THE LOOP.

function countFreq(letters)
{
  let a={};
  for(let i=0;i<letters.length;i++)
    {
      if(a[letters[i]]!=null)
      {
        a[letters[i]]=a[letters[i]]+1;
      }
      else
      {
        a[letters[i]]=1;
    }
    }
  return a;
}
console.log(countFreq("AAABBCCD"));

// To find a first three elements from a number array whose sum is X
// 6


// STEP-1: CREATE A FUNCTION twoSumPair AND PASS AN ARRAY arr AND A TARGETSUM VALUE targetsum AS AN ARGUMENTS.
// STEP-2: TAKE AN OUTER FOR  LOOP i FROM 0 TO THE  LENGTH OF THE ARRAY.
// STEP-3: TAKE AN INNER FOR LOOP j FROM i TO THE LENGTH OF THE ARRAY.
// STEP-4: CHECK WHETHER THE VALUE OF arr[i]+arr[j]=target RETURN THE VALUE OF THE INDEX POSITION.

// var threeSum = function(nums, target) {
//     let n = nums.length;
//     for (let i = 0; i < n; i++) {                        BRUTE FORCE
//       for (let j = i + 1; j < n; j++) {
//         for (let k = j + 1; k < n; k++) {
//           if (nums[i] + nums[j] + nums[k] == target)
//             return [i, j, k];
//         }
//       }
//     }
//   }

console.log(threeSum([1,5,6,2,3,4,5,9],9));
// STEP-1: CREATE AN ANONYMOUS FUNCTION AND PASS nums AND target AS AN ARGUMENTS.
// STEP-2: DECLARE AN OBJECT freq AND AN ARRAY finalFreq.
// STEP-3: TAKE A FOR LOOP i FROM 0 TO nums.length
// STEP-4:TAKE ANOTHER FOR LOOP j FROM i+1 TO THE nums>length.
// STEP-4: CREATE A VARIABLE diff TO STORE THE DIFFERENCE BETWEEN target  nums[i] AND nums[j].
// STEP-5: CHECK WHETHER THE OBJECT freq[diff]!=null
// STEP-6: IF ITS EQUAL PUSH THE FREQ OF DIFF AND THE VALUE OF i AND j.
// STEP-7: OTHERWISE ASSIGN THE freq[nums[i]]=i AND freq[nums[j]]=j.
// STEP-8: RETURN THE finalFreq.

var threeSum1=function(nums,target)
{
  let finalFreq=[]
const freq={ }
for(let i=0;i<nums.length;i++)
{                                                           //OBJECT APPROACH
  for(let j=i+1;j<nums.length;j++)
    {
    let diff=target-nums[i]-nums[j]; //Calculating the difference
   //  console.log(diff,freq)
    if(freq[diff]!=null)             //checking whether it contains any value or not
    {
      finalFreq.push([freq[diff],i,j]);  //Pushing it into the array
    }
    freq[nums[i]]=i;
    freq[nums[j]]=j;
    }
}
  return finalFreq; //Returning the array
}

console.log(threeSum1([1,5,6,2,3,4,5,9],9));
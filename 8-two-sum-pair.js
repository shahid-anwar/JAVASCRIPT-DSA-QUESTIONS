// To find a first pair from a number array whose sum is X
// X = 5
// arr = [1,2,3,4,5,6]
// output=0,3

// ALGORITHM
// STEP-1: CREATE A FUNCTION twoSumPair AND PASS AN ARRAY arr AND A TARGETSUM VALUE targetsum AS AN ARGUMENTS.
// STEP-2: TAKE AN OUTER FOR  LOOP i FROM 0 TO THE  LENGTH OF THE ARRAY.
// STEP-3: TAKE AN INNER FOR LOOP j FROM i TO THE LENGTH OF THE ARRAY.
// STEP-4: CHECK WHETHER THE VALUE OF arr[i]+arr[j]=target RETURN THE VALUE OF THE INDEX POSITION.


// const twoSum = function(nums, target) 
// {
// let n=nums.length;
// let st1=[];
// let st2=[];
// for(let i=0;i<n;i++)
// {
//     for(let j=i+1;j<n;j++)                       BRUTE FORCE APPROACH
//     {
//         if(nums[i]+nums[j]==target)
//         st1.push(i);
//         st2.push(j);
//     }
//     return [st1,st2];
// }
// }
console.log(twoSum([1,5,6,2,3,4,5,9],6));

// STEP-1: CREATE AN ANONYMOUS FUNCTION AND PASS nums AND target AS AN ARGUMENTS.
// STEP-2: DECLARE AN OBJECT freq AND AN ARRAY finalFreq
// STEP-3: TAKE A FOR LOOP FROM i=0 TO nums.length
// STEP-4: CREATE A VARIABLE diff TO STORE THE DIFFERENCE BETWEEN target AND nums[i].
// STEP-5: CHECK WHETHER THE OBJECT freq[diff]!=null
// STEP-6: IF ITS EQUAL PUSH THE FREQ OF DIFF AND THE VALUE OF i IN finalFreq
// STEP-7: OTHERWISE ASSIGN THE fre[nums[i]]=i.
// STEP-8: RETURN finalFreq

var twoSum2=function(nums,target)
{
    let finalFreq=[];
const freq={ }                                       //OBJECT APPROACH
for(let i=0;i<nums.length;i++)
{
    let diff=target-nums[i]; //Calculating the difference
   //  console.log(diff,freq)
    if(freq[diff]!=null)     //checking whether it contains any value or not
        finalFreq.push([freq[diff],i]); //Pushing it into the array
    freq[nums[i]]=i;
}
return finalFreq   //Returning the array
}
console.log(twoSum2([1,5,6,2,3,4,5,9],6));


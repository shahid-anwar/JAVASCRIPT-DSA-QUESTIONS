// Given an integer array nums and an integer k, 
// return the k most frequent elements. You may return the answer in any order.



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) 
 {
 //   if(k<=nums.length)
 //   {
 //   let obj={};
 //   for(let i=0;i<nums.length;i++)
 //   {
 //       let count=1;
 //       if(!obj.hasOwnProperty(nums[i]))
 //       {
 //          obj[nums[i]]=count;
 //       }
 //       else
 //       obj[nums[i]]=obj[nums[i]] + 1;
 //   }
   // console.log(obj);
 
 //   let objKey=Object.keys(obj);
 //   let arr=[];
 //   for(let i=0;i<k;i++)
 //   {
 //     for(let j=0;j<objKey.length;j++)
 //     {
 //       if(j==0)
 //       arr.push(objKey[i]);
 //       else if(
 //         obj[objKey[j]] >= obj[arr[i]]  &&  objKey[j] !==arr[i-1]
 //         )
 //       {
 //         arr.pop();
 //         arr.push(objKey[j]);
 //       }
 //     }
 //     return arr;
 //   }
  //  }
 // nums=[1,1,1,2,2,3]

//  2nd Approach
function topK(nums,k)
{
   let bucket=[];
   let result=[];
   let map =new Map();
 
   for(let num of nums)
   {
     map.set(num, (map.get(num) || 0) + 1);
   }
   for(let[a,b]of map)
   {
     bucket[b]=(bucket[b] || new Set()).add(a);
   }
   for(let i=bucket.length-1; i>=0; i--)
   {
     if(bucket[i])
     result.push(...bucket[i]);
     if(result.length===k)
     break;
   }
   return result;
 
 } }
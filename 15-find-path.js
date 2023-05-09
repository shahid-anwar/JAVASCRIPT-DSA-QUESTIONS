// Find path of an object
/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/
// ALGORITHM
// STEP-1: CREATE A FUNCTION TO ITERATE THROUGH THE OBJECT KEYS.
// STEP-2: CREATE ANOTHER FUNCTION AND TAKE OBJECT AND THE PATH AS PARAMETERS.
// STEP-3: SPLIT THE PATH INTO A NEW ARRAY.
// STEP-4: PASS THE PATH AS AN ARGUMENT TO ITERATE.


function iteration(iterate)
{
  let ans="";
  for(let i=0;i<iterate.length;i++)
    {
      ans+="."+iterate[i];
    }
  return ans;
}

const findPath = (object, path) => 
{
  let paths=path.split(".");
  let sum="";
  sum+=(object+iteration(paths));
  

  return sum;
};
var obj11= {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};

console.log(findPath(obj11, 'a.b.c')); // 12
// console.log(findPath(obj11, 'a.b')); // {c: 12, j: false}
// console.log(findPath(obj11, 'a.b.d')); // undefined
// console.log(findPath(obj11, 'a.c')); // undefined
// console.log(findPath(obj11, 'a.b.c.d')); // undefined
// console.log(findPath(obj11, 'a.b.c.d.e')); // undefined
// console.log(findPath(obj11, 'a.b.j')); //false
// console.log(findPath(obj11, 'a.b.j.k')); //undefined
// console.log(findPath(obj11, 'a.k')); //null
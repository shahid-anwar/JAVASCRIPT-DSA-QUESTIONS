


/* CURRING EXAMPLE
1) we created normal function with parameter(any)
2) we return a function with a particular return at the end (whaterver you wanted to do eg Addition)
3) check the output
*/

function add(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

const result = add(3)(4)(5);
// console.log(result);
//

//

/* INFINITE CURRING*/

// Question- We have to create a function which can create function currying upto infinite times.
// The Function call would be like this.
// 1) add(2)(3)(4) => 9.
// 2) add(2)(3)(4)(1) => 10.

function currying(a) {
    return function (b) {
      if (!b) {
        return a;
      }
      return currying(a + b);  // Recursion 
    };
  }

  const result1 = currying(12)(32)(43)();
//   console.log(result1);


function currying2(a)
{
    return function (b){
        if(!b)
        {
            return a;
        }
        return currying(a+b);
    };
}
const results=currying(12)(23)(7)(78)
// console.log(results);
//



const addition = (a) => (b) => b ? addition(a + b) : a;
//One liner
const res = addition(4)(3)(2)(1)();
// console.log(res);

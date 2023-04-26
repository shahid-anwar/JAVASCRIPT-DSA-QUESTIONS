// ALL PALINDROME IN A GIVEN STRING

// EX --HELLO MAM, HOW ARE YOU ? MAM MADAM DO YOU KNOW RACECAR ?   OUTPUT-MAM MADAM RACECAR

// STEP-1: CREATE A FUNCTION AND TAKE AN ARRAY OF STRINGS AS ARGUMENTS.
// STEP-2: CREATE A VARIABLE words WHICH WILL SPLIT THE ARRAY BY " ".
// STEP-2.1: CREATE A NEW ARRAY newArr.
// STEP-3: FIND THE PALINDROME OF ALL WORD BY CREATING A FUNCTION palindrome TO CHECK WHETHER IT IS PALINDROME OR NOT AND RETURN THE 
// PALINDROME WORD .
// STEP-4: PUSH ALL THE PALINDROME WORD INSIDE THE newArr
// STEP-5: RETURN THE PUSHED ARRAY WHICH CONTAINS OF AL THE  PALINDROME WORD.


function allPalindrome(arr)
{
  let words=arr.split(" "); //TO SPLIT THE ARRAY BY " "
  let strw="0";
  let rt="";
  let newArr=new Array(); //NEW ARRAY
  for(let i=0;i<words.length;i++) //LOOP TO TRAVERSE THE ARRAY
    {
      function palindrome(wordz) //FUNCTION TO FIND PALINDROME
        {
          let res="";
          for(let j=0;j<wordz.length;j++)//LOOP TO REVERSE THE WORD
            {
              res=wordz[j]+res;
              if(res==wordz)
                return res;  //RETURNING OF REVERSED WORD
            }
        }
      strw=palindrome(words[i]); //CALLING THE palindrome FUNCTION WITH THE INITIAL WORD AS PARAMETERS
      if(strw==words[i])
      {
        newArr.push(strw) //PUSHING ALL THE PALINDROME WORDS IN THE newArr
      }
    }
  return newArr; //RETURNING THE PUSHED ARRAY newArr WHICH CONTAINS ALL THE PALINDROME WORD
}

console.log(allPalindrome("MAM MADAM DO YOU KNOW RACECAR MMMADAMMM"))


// FIND THE LARGEST PALINDROME IN A GIVEN STRING

// EX -"1-HELLO MAM, HOW ARE YOU ? OUTPUT-MAM"
// EX- "2-MADAM DO YOU KNOW RACECAR ?   OUTPUT-RACECAR"

// ALGORITHM
// STEP-1: CREATE A FUNCTION AND TAKE AN ARRAY OF STRINGS AS ARGUMENTS.
// STEP-2: CREATE A VARIABLE words WHICH WILL SPLIT THE ARRAY BY " ".
// STEP-3: FIND THE PALINDROME OF ALL WORD BY CREATING A FUNCTION TO CHECK WHETHER IT IS PALINDROME OR NOT AND RETURN THE 
// PALINDROME WORD .
// STEP-4: CHECK THE LENGTH OF THE PALINDROME WORD.
// STEP-5: STORE THE CURRENT PALINDROME WORD AND CHECK IF THE LENGTH IS BIGGER OR NOT IF ITS  BIGGER ASSIGN IT IN A VARIABLE.
// STEP-6: RETURN THE ASSIGNED VARIABLE WHICH IS THE LARGEST  PALINDROME WORD.

function largestPalindrome(arr)
{
  let words=arr.split(" ");//TO SPLIT THE ARRAY BY " "
  let strw="0";
  let rt="";
  for(let i=0;i<words.length;i++)//LOOP TO TRAVERSE THE ARRAY
    {
      function palindrome(wordz)//FUNCTION TO FIND PALINDROME
        {
          let res="";
          for(let j=0;j<wordz.length;j++)//LOOP TO REVERSE THE WORD
            {
              res=wordz[j]+res;
              if(res==wordz)
                return res; //RETURNING OF REVERSED WORD
            }
        }
      strw=palindrome(words[i]); //CALLING THE palindrome FUNCTION WITH THE INITIAL WORD AS PARAMETERS
      if(strw==words[i])
      {
        if(strw.length>rt.length) //CHECKING THE LENGTH TO FIND OUT THE LARGEST PALINDROME WORD
          rt=strw;
      }
    }
  return rt; //RETURNING THE LARGEST WORD
}

console.log(largestPalindrome("MAM MADAM DO YOU KNOW RACECAR MMMADAMMM"))



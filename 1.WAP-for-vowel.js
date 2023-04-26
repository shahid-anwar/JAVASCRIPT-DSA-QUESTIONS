// ALGORITHM


// STEP-1: CREATE A FUNCTION NAMED CHECKVOWEL AND PASS letter AS AN PARAMETER.
// STEP-2: IF THE TYPE OF LETTER IS A NOT STRING THEN IT WILL RETURN TO ENTER A VALID DATA.
// STEP-3:ELSE IT WILL MOVE TO THE ELSE CONDITION WHERE IT IT WILL CHECK  WHETHER IT IS VOWEL OR NOT.
// STEP-4:IF IT IS VOWEL IT WILL RETURN IT IS A VOWEL
// STEP-4.1: ELSE IT WILL RETURN IT IS NOT A VOWEL.

function checkVowel(letter)
{
   if(typeof letter!=="string"||letter.length===0)
  {
    return "Please Enter Valid Data"
  }
  else 
  {
    if(letter=="a"||letter=="e"||letter=="i"||letter=="o"||letter=="u")
    return "It is a vowel";
      else
    return "It is not a vowel";
  }

}
console.log(checkVowel("a"));
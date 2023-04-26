// ALGORITHM TO REVERSE A STRING
// SHAHID=>DIHAHS

// STEP-1: CREATE A FUNCTION NAMED REVSTR AND PASSED A PARAMETER.
// STEP-2: DECLARE A VARIABLE RESULT AND ASSIGN AN EMPTY STRING.
// STEP-3: WRITE A CONDITION TO CHECK THE INPUT IS ONLY  A STRING  OR NOT.
// STEP-3.1: IF IT IS NOT VALID RETURN INVALID.
// STEP-4: IT THE CONDITION REMAINS FALSE THEN DECLARE A VARIABLE CONVERT TO CONVERT UPPERCASE TO LOWERCASE.
// STEP-6: ITERATE A  REVERSE FOR LOOP (i) FROM STRING.LENGTH-1 TO GREATER THAN EQUAL TO 1 AND DECREMENT BY 1.
// STEP-7: ASSIGN STRING(i) TO THE RESULT VARIABLE.
// STEP-8: RETURN THE RESULT OUTSIDE THE LOOP

function revStr(word){
    let result="";
  if(typeof word!=="string"|| word.length===0)
  {
    return "Please Enter a String";
  }
  else
  {
    let convert=word.toLowerCase();
    for(let i=convert.length-1;i>=0;i--)
    {
         result=result+convert[i];
    }
    return result;
}
}

console.log(revStr("12124"));

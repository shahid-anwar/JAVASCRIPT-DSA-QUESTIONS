// To check whether particular word/number present in sentence or not without using inbuilt function

// String - Hello my name is Ankit
// Test Case - "funny"
// Output - False

// String - Hello my name is Ankit
// Test Case - "ankit"
// Output - false


// ALGORITHM
// STEP-1: SPLIT THE SENTENCE INT AN ARRAY.
// STEP-2: TAKE A LOOP TO ITERATE THROUGH THE ARRAY OF STRINGS.
// STEP-3: TAKE AN INNER FOR LOOP TO ITERATE THROUGH THE WORDS.
// STEP-4: CHECK THE CHAR CODE BETWEEN THE SPLITTED WORD AND THE WORD TO SEARCH.
// STEP-5: IF THE CHAR CODE MATCHES RETURN TRUE ELSE RETURN FALSE

const sentence = function(sentence, word) {
    let allWords = sentence.split(" ");
    let flag=0; 
    
    for (let i = 0; i < allWords.length; i++) //LOOP TO TRAVERSE THE ARRAY
  {
    for (let j = 0; j < allWords[i].length; j++) //LOOP TO TRAVERSE THE FIRST ELEMENTS OF THE ARRAY.
    {
   
      if(allWords[i].charCodeAt(j)===word.charCodeAt(j))//CHECKING BOTH THE CODES OF THE WORDS.
        flag=1;
       
      else
      {
        flag=0
        break; 
      }
    }
  if(flag==1)//IF ITS 1 THERE IS NO NEED TO GO FURTHER.
    break;
} 
    return flag==1?true:false;
}

console.log(sentence("Hello my name is Ankit", "ankit"))
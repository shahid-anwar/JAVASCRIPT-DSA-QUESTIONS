// ALGORITHM

// STEP-1: CREATE A FUNCTION NAMED COUNTVOWELS AND TAKE PARAMETERS AS INPUT FROM THE USER
// STEP-2: TAKE FIVE VARIABLE AND INTIALIZE WITH 0.
// STEP-3: ITERATE A FOR LOOP FROM START OF THE STRING TO THE LENGTH.
// STEP-4: FOR EVERY WORD CHECK WHETHER IT IS A VOWEL OR NOT.
// STEP-5: AND INCREMENT THE VALUE OF VARIABLE BY 1.
// STEP-6: RETURN THE VALUE INCREMENTED AFTER THE LOOP ENDS AS AN OBJECT IN KEY VALUE PAIR.

function countvowels(input)
{
    let a=0; let e=0; let i=0; let o=0; let u=0;
    for(let k=0;k<input.length;k++)
    {
        if(input[k]=="a")
        a=a++;
        if(input[k]=="e")
        e+=e;
        if(input[k]=="i")
        i+=i;
        if(input[k]=="o")
        o+=o;
        if(input[k]=="u")
        u+=u;
    }
    return {a,e,i,o,u}
}

console.log(countvowels("shahid"));
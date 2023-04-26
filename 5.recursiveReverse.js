
  function reverseString(x) {
    if (x.length == "") return "";
    else return reverseString(x.substr(1)) + x.charAt(0);
  }
  console.log(reverseString("hello"));


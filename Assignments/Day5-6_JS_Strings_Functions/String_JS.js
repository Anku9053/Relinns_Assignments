// Write a JavaScript function that accepts a string as a parameter and:

// 1. Converts the first letter of string in upper case

// 2. Remove any whitespaces from the string start or the end

// Example
// For "this is Test "; Print "This is Test"
// For "   hello a"; Print "Hello a"
// Input: str
// Output: Converts the first letter of string in upper case and remove spaces
// Must only use string methods for the activity, which may include:

// charAt
// slice
// concat

let  str = "   this is Test    "
function accept_String(str){
  const index = 0;
  let newStr = str.trim();
  let  updated_Str = newStr.charAt(index).toUpperCase();
  let sliced_Str = newStr.slice(1);
  let result = updated_Str.concat(sliced_Str);
  console.log(result) 
}
accept_String(str);

// Syntax for for loops


// Syntax : for(datatype initialisation, condition, afterthoughts(expression)){
//     Statement
// }

// create a loop that iterates the number from 0 to 10
for(let i=0;i<=10;i++){
    // console.log(i);
}

// output should be = 0 1 2 3 4 5 6 7 8 9 10


// create a loop that iterates the number from 0 to 10 that prints in a same line
let bag = "";
for(let i=0;i<=10;i++){
    bag+=i;
}
// console.log(bag)

// output should be  = 012345678910;

// calaculaate actorial of a number by  using for loops

let number = 8;
let product = 1;
let sum = 0;
for(let i=number;i>0;i--){
    product *= i;
}

// console.log(product)

// Array Sum

// Given an array of numbers, use a for loop to calculate the sum of all elements in the array.

for(let i=number;i>0;i--){
    sum += i;
}
// /console.log(sum)


// Array Elements

// Write a for loop to iterate over an array of strings and print each string in uppercase.

let string = "H e l l o H o w A r e Y o u";
let  str ="";
for(let i=0;i<=string.length-1;i++){
    str+=string[i].toUpperCase();
}

// console.log(str)
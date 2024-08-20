// console.log("Now we are into while loops");
// Syntax for while loops


// Syntax : while(condition){
//     Statement
// }

// print the number upto n 
let i=0;
while(i<10){
    i++;
    // console.log(i);
}
// output should be = 0 1 2 3 4 5 6 7 8 9 10

let number  = 10;
let max;
let  firstFibo  = 0;
let secondfibo = 1;

while(i<=number){
   if(i==2){
    max = secondfibo
   }
   else if(i==1){
    max = firstFibo
   }
   else {
    max = firstFibo + secondfibo;
    firstFibo  = secondfibo;
    secondfibo = max;
   }

   console.log(max);
   i++;
}


// console.log(max)
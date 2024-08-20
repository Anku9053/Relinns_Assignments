// let numbers = [1,2,3,4,5,6,7,8,9];
let numbers = [10, 20, 30, 40, 50];
const result = numbers.forEach((el)=>{
    // console.log(el)
    // return el
})

// Use forEach to log each number in the array to the console.

numbers.forEach((el)=>{
    // console.log(el)
})

// Use forEach to sum up all numbers in the array and store the result in the `total` variable.
let total = 0;
numbers.forEach((el)=>{
    total+=el
})
// console.log(total)

let people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];
// Use forEach to log a message saying "Name: <name>, Age: <age>" for each person in the array.

people.forEach((el)=>{
    // console.log(`Name : ${el.name}, Age : ${el.age}`)
})

// Use forEach to square each number in the array and store the results in a new array called `squaredNumbers`.
let squred_numbers = [];

numbers.forEach((el)=>{
    let result= el*el;
    squred_numbers.push(result)
})

console.log(squred_numbers)
let numbers = [1,2,3,4,5,6,7,8,9];
const data2 = numbers.map((el)=>{
    return el
})
// console.log(data2)

// Use map to create a new array where each number is doubled.
const data = numbers.map((el)=>{
    return el*2
})
// console.log(data)
let words = ['hello', 'world', 'javascript'];
// Use map to create a new array where each string is capitalized (e.g., "hello" becomes "HELLO").

let uppercase = words.map((el)=>{
    return el.toUpperCase()
})
// console.log(uppercase)

let people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

const desc = people.map((el)=>{
    el.description = "heythere"
    return el;
})
console.log(desc)
// task 1
// Task 1 → Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

function shoppingSpree(arr) {
   let sum = 0
   arr.forEach((el)=>{
      sum+=el.price
   }) 
      return sum
   }

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist));

//Task2
// Task 2 → Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once,
//  assuming that the we have to pay a base service price of 300 along with the item prices

function shoppingSpree(arr) {
   let sum = 0
   let baseprice = 300;
   arr.forEach((el)=>{
      sum+=el.price
   }) 
      return sum+baseprice;
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist));
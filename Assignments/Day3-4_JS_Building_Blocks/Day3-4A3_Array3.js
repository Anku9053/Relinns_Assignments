// → Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.


function peopleWhoBelongToTheIlluminati(arr){
  // const isMember = arr.filter((el)=>{
  //   el.member!==true
  // })

  // return isMember
  const data = arr.filter((el)=>{
    return el.member!==true
  })
  return data
}

console.log(peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]));
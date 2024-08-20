// creating Objects


let obj = {};
// console.log(obj)
// Output = {};





//////////////////////////////////////////////////////////////////////////////////////


// Giving the value to the object
// obj.name = "Ankesh Kumar";
// obj.age= 23;
// obj.company = "Relinns";
// obj.designation = "Software Developer Trainee";

//////////////////////////////////////////////////////////////////////////////////////


// Giving value to the object by using function 
function giveValue(name,age,company,designation){
    obj.name = name;
    obj.age = age;
    obj.company = company;
    obj.designation = designation;

    return obj
}

console.log(giveValue("Ankesh",22,"Rel","Dev"));
console.log(giveValue("Simmi",22,"Rel","Dev"));
console.log(giveValue("Dimmi",22,"Rel","Dev"));
console.log(giveValue("Chimmi",22,"Rel","Dev"));
console.log(giveValue("Sakshi",22,"Rel","Dev"));
console.log(giveValue("Masoom",22,"Rel","Dev"));
console.log(giveValue("Dehradun",22,"Rel","Dev"));
console.log(giveValue("Culprit",22,"Rel","Dev"));


// console.log(obj)
// Output = {
//   name: 'Ankesh Kumar',
//   age: 23,
//   company: 'Relinns',  
//   designation: 'Software Developer Trainee'
// }



////////////////////////////////////////////////////////////////////////////
// Dot Notation: By  the help of dotnotation we can actually get the data as well as save the data DOt data is followed by the name of the object and dot after that name and then the key of the particular  object  now we can actually  store the data as well as we can get the particular data also



////////////////////////////////////////////////////////////////////////////////
// Get the value by using dot notation
function getValue(obj){
    // console.log("at  line 62",obj)
//    console.log( obj.name)
}
// getValue(obj)


////////////////////////////////////////////////////////////////////////////////
// Save the data by using dot notation

function SaveData(obj){
    obj.name = "Hello";
    // console.log(obj)
}
// SaveData(obj)


////////////////////////////////////////////////////////////////////////////
// Bracket Notation: By  the help of Bracket notation we can actually get the data as well as save the data Bracket notation data is followed by the name of the object and Bracket after that name and then the key of the particular  object  now we can actually  store the data as well as we can get the particular data also


////////////////////////////////////////////////////////////////////////////////
// Get the value by using Bracket notation
function getValue(obj){
    // console.log("at  line 62",obj)
//    console.log( obj["name"])
}
// getValue(obj)


////////////////////////////////////////////////////////////////////////////////
// Save the data by using Bracket notation

function SaveData(obj){
    obj["name"] = "Hello";
    // console.log("At  line number 96",obj)
}
// SaveData(obj)


///////////////////////////////////////////////////////////////////////////////

// This Keyword : By using this keyword we can actually get the value which is outside of that method but that value remains in that particular object only;

function chack_Instances(){

    const thisKeywordObject = {
        name:"Brother",
        subject:"English",
        bio:function(){
        return `Hello ${this.name} your subject is ${this.subject} Happy Learning!!!!!!!!!!`
    }
}
console.log(thisKeywordObject.bio());

const thisKeywordObject2 = {
    name:"Naam Nahii Hai",
    subject:"English",
    bio:function(){
        return `Hello ${this.name} your subject is ${this.subject} Happy Learning!!!!!!!!!!`
    }
}

console.log(thisKeywordObject2.bio());

}
// chack_Instances()



// //////////////////////////////////////////////////////////////////////////////////////////

// Json : javascript Object Notation it is basically an object where we can store the data into multiple object format we have to stor ethe data into key value pair and by  using dot notation and bracket notation we can atually get the value..
const personal_Data = [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    }
  ]
  

  personal_Data.map((el)=>{
    console.log(el.name,el.age,el.secretIdentity,el.powers.forEach((el=>{
        console.log(el)
    })))
  })


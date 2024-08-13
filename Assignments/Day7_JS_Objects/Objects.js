// Create an object called person with name = John, age = 50.
// Then, access the object to alert("John is 50").


function create_Objects(name,age){
    this.name = name,
    this.age = age
    // return obj;
}

const alertSign = new create_Objects("Ankesh",23);
alert(`${alertSign.name} is ${alertSign.age}`)
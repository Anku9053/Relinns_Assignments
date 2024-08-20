// Mutation = A change in the form or nature of the original data in javascript as we know there are two datatypes one is primitive datatypes and other is non primitive datatypes


// Example 

let obj = {name:"Ankesh_Kumar",Designation:"Software Developer Trainee"};
let new_obj = obj;

console.log("Before Changing the object will be ",obj);
console.log("Before Changing the new object will be ",new_obj);
new_obj.name = "Sakshi Semwal";
new_obj.Designation = "Housewife";

console.log("After Changing the object will be ",obj);
console.log("After Changing the new object will be ",new_obj);


// // Outputs
// Before Changing the object will be  { name: 'Ankesh_Kumar', Designation: 'Software Developer Trainee' }
// Before Changing the new object will be  { name: 'Ankesh_Kumar', Designation: 'Software Developer Trainee' }
// After Changing the object will be  { name: 'Sakshi Semwal', Designation: 'Housewife' }
// After Changing the new object will be  { name: 'Sakshi Semwal', Designation: 'Housewife' }


// Explanation 
// As we can see by mutating the new_obj the old obj values also get changed because object is a refrence typed data Whenever you create an object, it gets a new memory location. This memory location holds the object’s value. Then this memory location links to the variable name.

// So, when I created the new_obj object using const new_obj = obj, the obj memory is shared by this new_obj object. Both have now the same in-memory value. The change in the new_obj object would affect obj object automatically as well.


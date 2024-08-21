// Expected time to complete: 1 Day

// In this assignment you have write RAW mongodb queries for the same operations you did in nodejs.

// Write and save queries for:

// Add a product to a collection named 'products' 
// { id:1, title:'...', price:'...', category:'...', description:'...', image:'...' }
// Get list of all product
//  [{ id:1, title:'...', price:'...', category:'...', description:'...', image:'...' }]
// Get a single product by ID
// { id:1, title:'...', price:'...', category:'...', description:'...', image:'...' }
// Update a single product by ID
// - Should return the updated value
// - If the product being updated does not exist create a new one
// Remove a single product by ID

// for instering in products
db.product.inserOne({ id:1, title:'...', price:'...', category:'...', description:'...', image:'...'})

// for getting all the list in products
db.product.find();

// get a single product by id
db.product.findOne({id:"value"});

// Update a single product by ID
db.product.findOneAndUpdate({_id:"Value"},{$set:{Name:"Anything"}},{ returnOriginal: false });
// Remove a single product by ID
db.product.deleteOne({_id:"Value"});





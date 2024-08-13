// This tasks objective is to use all asynchronous methods in JS. Complete the following steps as in order:
// Create 3 functions that takes an argument
// These functions returns a promise
// The promise will resolve with a message "resolved by 'function name'", if the passed argument is true
// The promise will reject with a message "rejected by 'function name'",if the passed argument is false
// Call all the functions parallelly and console the promise value.
// 5.1 Case 1: Arguments passed to all functions are true
// 5.2 Case 2: Arguments passed to 2nd functions is false 
// Call all the functions in sequence by promise chaining and console the promise value.
// 6.1 Case 1: Arguments passed to all functions are true
// 6.2 Case 2: Arguments passed to 2nd functions is false 
// Call all the functions in sequence by async await and console the promise value.
// 7.1 Case 1: Arguments passed to all functions are true
// 7.2 Case 2: Arguments passed to 2nd functions is false


function firstFunction(argument1){
return new Promise((resolve,reject)=>{
    if(argument1===true){
        resolve(`resolved by ${firstFunction.name}`)
    }
    else{
        reject(`rejected by ${firstFunction.name}`)
    }
})
}



function secondFunction(argument2){
    return new Promise((resolve,reject)=>{
        if(argument2=='resolved by firstFunction'){
            resolve(`resolved by ${secondFunction.name}`)
        }
        else{
            reject(`rejected by ${secondFunction.name}`)
        }
    })
}


function thirdFunction(argument3){
    return new Promise((resolve,reject)=>{
        if(argument3=='resolved by secondFunction'){
            resolve(`resolved by ${thirdFunction.name}`)
        }
        else{
            reject(`rejected by ${thirdFunction.name}`)
        }
    })
}


// let argument = true;
let argument1 = false;

//////////////////////////////////////////////////////////////////////////////////////////////
// Logging out the function here 


firstFunction(argument1).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})


secondFunction(argument1).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})

thirdFunction(argument1).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})



/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Call all the functions parallelly and console the promise value.

let result = Promise.allSettled([firstFunction(argument1),secondFunction(argument1),thirdFunction(argument1)]).then((result)=>{

    result.forEach(element => {
        
        if(element.status=='fulfilled'){
            console.log(element.value);

        }
        else{
            console.log(element.reason)
        }
        
    });
})
.catch((err)=>{
    console.log(err)
})


//////////////////////////////////////////////////////////////////////////////////////////
// Call all the functions in sequence by promise chaining and console the promise value.


firstFunction(argument1).then((res)=>{
    console.log(res)
    return secondFunction(res)
})
.then((res)=>{
    console.log(res)
    return thirdFunction(res)
})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err)
    return secondFunction(err)
})
.catch((err)=>{
    console.log(err)
    return thirdFunction(err)
}).catch((err)=>{
    console.log(err)
    // return secondFunction(err)
})



// Call all the functions in sequence by async await and console the promise value.
async function main(argument) {
    try{

        let data = await firstFunction(argument);
        console.log(data)

    let data2 = await secondFunction(data);
    console.log(data2)
    
    let data3 = await thirdFunction(data2);
    console.log(data3)
}

catch(error){
   console.log(error)
 
}}
main(argument1)
// console.log("Async_Awaits are working");




async function testingAsyncFunctions() {
    const data = await new Promise((resolve,reject)=>{
        setInterval(() => {
            
            resolve("hey there worth trying")
        }, 4000);
    })

    return data;
}


    async function displayingAsyncFunction(){
        try{

            const data = await testingAsyncFunctions();
            console.log(data)
        }
        catch (error){
            console.log(error)
        }
    }


    displayingAsyncFunction()





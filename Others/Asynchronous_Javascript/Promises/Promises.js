let promise = new Promise((resolve,reject)=>{
    const  data = fetch("https://fakestoreapi.com/products")
    if(data){

        resolve(data);
    }
    else reject("Error Loading Your data");
})
let bag = [];
promise.then((res)=>{
    return res.json()
})
.then((data)=>{
    bag = data;
    console.log(bag)
    displaydata(data)
})
.catch((err)=>{
    console.log(err);
})


function displaydata(bag){
    let parent = document.getElementById("parent");
    bag.forEach(el => {
       let div = document.createElement("div");
       let img = document.createElement("img");
       img.src = el.image;
       let h3 = document.createElement("h3");
       h3.textContent = el.title;
       let p = document.createElement("p");
       p.textContent = el.description;
       let rating = document.createElement("p");
       rating.textContent = el.rating.rate;
       let price = document.createElement("p");
       price.textContent = el.price;

       
       div.append(img,h3,p,rating,price);
       parent.append(div);
    });

}


// let promise = new Promise(function (resolve, reject) {
//     let x = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     if(typeof x == Number){
//         resolve("Hurray")
//     }
//     else{
//         reject("No Hurray")
//     }
// })

// promise
//     .then(function (successMessage) {
//         console.log(successMessage);
//     }, function (errorMessage) {
//         console.log(errorMessage);
//     }); 
// setInterval() = It is used to call a function at a specific interval of time the time is given by the user after that  the function should call the time should be in milli;

// Syntax : let timeOut = setInterval(func,delay);
// func = it is the name of the function although we can use arroww function also
// delay = it is the time it is going to run the code and execute in this interval of time;


///////////////////////////////////////////////////////////////////////////////////////////
// Example

function demo(name,greet){
    let date  = new Date();
    console.log(`I am working fine as usual and the time is ${date}`)
    console.log(`${name},${greet}`)
}

// let Interval_Time = setInterval(demo,2000,"Ankesh",`How are Ya`)


///////////////////////////////////////////////////////////////////////////////////////////
// clearInterval = it  is used to stop the time interval by  using clearInterval it takes one argument that is the variable where setInterval store actually;


// setTimeout(() => {
    
//     clearInterval(Interval_Time);
// }, 10000);

// Note = We can also pass as many parameters as we want in our function it will take those pasrameters as an arguments and help us to use those arguments in our function as our needs.



    


let colorCode;
let storedColor = document.querySelector(".change_text_color");
// console.log(storedColor)
function handleChangeColor(){
    
        colorCode = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
        
        
        
    }

    let start;
   function startChangingColor (){
    start = setInterval(() => {
        
        handleChangeColor()
        storedColor.style.color = colorCode
        console.log(storedColor)
        // storedColor.style.Color = colorCode;
        // storedColor = colorCode;
        // console.log(colorCode)
    }, 2000);
   }

   function stopChangingColor(){
    clearInterval(start)
   }
    // console.log(storedColor)
    document.querySelector('.startMe').addEventListener('click', startChangingColor);
    document.querySelector('.stopMe').addEventListener('click', stopChangingColor);

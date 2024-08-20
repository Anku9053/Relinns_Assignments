// SetTimeout() = It is used to call a function after a certain period of time the time is given by the user after that  the function should call;

// Syntax : let timeOut = setTimeout(func,delay);
// func = it is the name of the function although we can use arroww function also
// delay = it is the time after the completion of this time the code will run aand execute


///////////////////////////////////////////////////////////////////////////////////////////
// Example

function demo(){
    console.log("I am working fine as usual")
}

// let timerId = setTimeout(() => {
//     demo();
// }, 3000);


// //////////////////////////////////////////////////////////////////////////////////////
// Clearing the setTimeout
// For clearing the timeout we need to first assign our settimeout function to a variable then we need to pass that  variable as an argument in claerTimeout function 

// clearTimeout(timerId);


// Note = We can also pass as many parameters as we want in our function it will take those parameters as an arguments and help us to use those arguments in our function as our needs.




// lets do something by using setTimeOut
// console.log("working fine here")

const flag = false;

function loggedIn(){
    setTimeout(() => {
        flag = !flag;
    }, 10000);
}


function loggedOut(){
    setTimeout(() => {
        flag = true;
    }, 10000);
}



console.log(flag)
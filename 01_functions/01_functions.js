function addTWOnum(num1,num2){
    return (num1+num2);
    
}
 console.log(addTWOnum(2,3))

function addTWOnum(num1,num2){
    console.log(num1+num2);
    
}
addTWOnum(2,3)

function loginUserMessage(username){
    if(username==undefined){
    return "enter the user name"
    }
    return `${username} just logged in `
}    

console.log(
   loginUserMessage());

   console.log(
    loginUserMessage("priyansu"));


function calculator(val1,val2,...num1){
    return num1
}

console.log(calculator(200,400,600,500));

const user={
    username:"hitesh",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)

handleObject({
    username:"sam",
    price:399
})

const nyNewArray=[200,400,100,600]

handleObject({
    username:"sam",
    price:399
})

function returnSecondalue(getArray){
    return getArray[1]
}

console.log(returnSecondalue([200,400,500,1000]));

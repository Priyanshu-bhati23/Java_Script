const user={
    username:"hitesh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcometo website`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);

function chai(){
    let username="pb"
    console.log(this.username);
    
}

chai()


const chai2=function(){
    let username="pb"
    console.log(this.username);
    
}

chai2()

const chai3 = () =>{
    let username="pb"
    console.log(this.username);
    
}

chai3()


// const addTwo=(num1,num2) =>{
//     return num1+num2
// }

const addTwo=(num1,num2) =>({usernmae:"hitesh"})//no return keyword required


console.log(addTwo(3,4));


const myArray=[2,34,5,6]

// myArray.forEach()
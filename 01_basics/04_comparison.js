// console.log(2>1);
// console.log(2>=1);
// console.log(2<=1);
// console.log("2">1);

console.log(null>0);
console.log(null==0);
console.log(null>=0);

console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);


//+++++++++++++++++++++++++++++++++++++

//STACK(Primitive),Heap(Non-Primitive)

let myYoutubename="hiteshchoudharydotcom"
let anothername=myYoutubename
anothername="chaiaurcode"


let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

userTwo=userOne
userTwo.email="hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);//Prmitive-->STACK,NON-P-->HEAP

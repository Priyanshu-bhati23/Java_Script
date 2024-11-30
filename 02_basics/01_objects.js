// singleton -->made from constructor

//object literals

const mysym=Symbol("key1")
const JsUser={
    name:"Hitesh",
    age:18,
    mysym:"mykey",
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastloginDays : ["Monday","Tuesdat"],
    greeting:"Namaste sabhi",
    greeting2:"Namaste sabhi"

}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser.mysym);//mysym is being treated as a  string in onject
// Object.freeze(JsUser)
JsUser.email-"hitesh@gmail.ocm"
console.log(JsUser.email);//googl.com

JsUser.greeting=function(){
    console.log("Hello JS user");
    
}

JsUser.greeting2=function(){
    console.log(`Hello JS user,${this.name}`);
    
}

console.log(JsUser.greeting2());

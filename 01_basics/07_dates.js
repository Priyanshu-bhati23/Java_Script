let myDate= new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate=new Date(2023,4,23)
console.log(myCreatedDate.toDateString());

let myTimeStamp=Date.now()

console.log(myTimeStamp)
console.log(Math.floor(Date.now()/1000));


let newDate= new Date()
console.log(newDate);

console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.getDate());

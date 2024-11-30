const name="hitesh"
const repoCount=50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName =new String('hitesh-hc')

console.log(gameName[0]);

console.log(gameName.__proto__);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));


const newString=gameName.substring(0,4)//0-->3
console.log(newString);

const anotherString=gameName.slice(-8,4)
console.log(anotherString);

const newStringOne="  hiteshh  "

console.log(newStringOne.trim());

const url="google.com"
 console.log(
   url.replace('.com','.in'));

Newowrd='hello-bubu-dudu'
console.log(Newowrd.split('-'));

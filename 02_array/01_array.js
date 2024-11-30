const myArr=[0,1,2,3,4,5,6]

console.log(myArr[0]);
const myHeores=["shaktiman","naag"]
const myArr2=new Array(1,2,3,4)
console.log(myArr[0]);

//Array methods

myArr.push(6)
myArr.push(7)
myArr.push(8)
console.log(myArr);

myArr.pop()

myArr.unshift(9)
myArr.shift()//removing unshifted element
console.log(myArr);

console.log(myArr.includes(9));

console.log(myArr.indexOf(3));

const newArr=myArr.join()//adds oall eleemt to a  string

console.log(newArr);

console.log(" a ",myArr);


const myn1=myArr.slice(1,3)
console.log(myn1);
console.log(" b ",myArr);

const myn2=myArr.splice(1,3)
console.log(myn2);
console.log(" c ",myArr);


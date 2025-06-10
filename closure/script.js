// function main(name){
   

//     function sayMyName(){
//         console.log(name);
        
//     }
//     return sayMyName;
// }

// let consolePriy=main("Priya");

// console.log(consolePriy);
// console.log(consolePriy);
// console.log(consolePriy);
// console.log(consolePriy);
// console.log(consolePriy);




// function adder(num){
//     function add(b){
//         console.log(num+b);
        
//     }
//     return add;
// }

// const addTo5=adder(5);
// addTo5(2);
// addTo5(20);
// addTo5(22);
// addTo5(23);
// addTo5(24);
// addTo5(25);


const myName=document.getElementById("my-name");
const btn=document.getElementById('my-btn')

function makeCounter(){
    let count=1;

    function increment(){
        console.log(count++);
        
    }
    return increment;
}

const counter1=makeCounter();

counter1();
counter1();
counter1();
counter1();
counter1();
counter1();
counter1();
counter1();
// var c=300
let a=20;
if (true){
    let  a=10;
    const b=20
    console.log("index");
    console.log(a);
    
    

}

// console.log(b);//not working
// console.log(a);//not working
console.log(a);


function one(){
    const username="hitesh"
    console.log(username);
    
    function two(){
        const website="youtube"
        console.log(website);
        
    }
    // console.log(webiste);
    two()
    
}

one()

if (true){
    const username="hitesh"
    if(username=="hitesh"){
        const webiste="youtube"
        console.log(username+webiste);
    }
}

//++++++++++ intersting+++++++++++++

addone(5)//this will work
function addone(num){
    return num+1
}

addone(5)


// addTwo(5)//thi will not work?

const addTwo=function(num){
    return num+2
}
addTwo(5)
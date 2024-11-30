const myObject={
    js:'javascript',
    cpp:'C++',
    rb:"ruby",
    swift:"swift by apple"

}

for(const key in myObject){
    console.log(myObject[key]);
    
}

const programming=['js','cpp','rb','jj']

for(const key in programming){
    console.log(programming[key]);
}

programming.forEach(function(val){
    console.log(val);
    
})

programming.forEach((item) =>{
    console.log(item);
    
})

function printMe(){
    console.log(item);
    
}

programming.forEach(printMe)
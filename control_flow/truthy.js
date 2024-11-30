const userEmail=[]

if(userEmail){
    console.log("Got user email");
    
}else{
    console.log("dont have user email");
    
}

//flasy vlalue ///false,0,-0,BigInt 0n,"",null,undefined,NaN


//truthy "0",'false'," ",[],{},function(){}

const emptyObj={}

if(Object.keys(emptyObj).length==0){
    console.log("OBJ IS EMPTY");
    
}

//Nullish Coalescing Operator(??) null undefined

let val;
val= 5?? 10
val1=null??10
console.log(val1);

//IMMMIDITAELY INVOKED FUNCTION EXPRESSIONS(IIFE)

(function one(){
    //named iife
    console.log('DB CONNECTED');
    
})();

((name)=>{
    //iife
    console.log(`DB CONNN by ${name}`);
    
})("hitesh");
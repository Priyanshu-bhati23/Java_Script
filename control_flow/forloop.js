let Array = [2, 3, 4, 5, 6, 7]; // Use square brackets to define an array

for (let index = 0; index < Array.length; index++) {
    console.log(Array[index]); // Access elements using square brackets
}

for(let i=0;i<=10;i++){
    console.log(`Outer value:${i}`);

    for (let m = 0; m < Array.length; m++) {
        const element = Array[m];
        console.log(element);
        
        
    }
    }
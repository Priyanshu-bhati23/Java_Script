const arr=[1,2,3,4,5]

for(const num of arr){
    console.log(num);
}

const greetings="Hello World!"
for(const greet of greetings){
    console.log(`Each cha is ${greet}`);
    
}

//Maps

const map=new Map()
map.set('IN',"INDIA")
map.set('US',"UNITED STATES")
map.set('FR',"FRANCE")
map.set('FR',"FRANCE")

console.log(map);

for (const [key,value] of map){
    console.log(key,`:-`,value);
    
}




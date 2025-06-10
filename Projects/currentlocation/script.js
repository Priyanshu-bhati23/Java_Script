const button=document.getElementById('get-location-button');

async function getData(lat,long){
    const promise=await fetch(
        `http://api.weatherapi.com/v1/current.json?key=b6aabee83136465baad164240251006&q=${lat},${long}London&aqi=no`
    )
    return await promise.json();
}

async function gotlocation(position){
   const result= await getData(position.coords.latitude,position.coords.longitude);

   console.log(result);
   
    
}
function notgotposition(){
    console.log('Unable to retrieve your location');
}



button.addEventListener('click',async ()=>{
   const result= navigator.geolocation.getCurrentPosition(gotlocation,notgotposition); 
})
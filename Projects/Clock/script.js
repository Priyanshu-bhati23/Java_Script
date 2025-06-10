const display=document.getElementById("time");
function showTime(){
    const currentTime=new Date();
    const time=`${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
    display.innerText=time;
}



let interval=setInterval(showTime,1000);

button.addEventListener("click",()=>{
    clearInterval(interval);
})
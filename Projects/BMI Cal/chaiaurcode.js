const form =document.querySelector('form')
//this usecase will gave you empty value
// const height=parseInt(document.querySelector('#height').value)/

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')
    if(height ===''|| height <0 || isNaN(height)){

        results.innerHTML=`Please give a valid height ${height}`;
    }else if(weight ===''|| weight <0 || isNaN(weight)){
        

        results.innerHTML=`Please give a valid weight ${weight}`;
    }else{
        const BMI=(weight/((height*weight)/10000)).toFixed(2)//2 decimal number
         //show the result 
         if (BMI<18.6){
            results.innerHTML=`UnderWeight:Less than 18.6 BMI:${BMI}`
    

         }else if(BMI>24.9){
            results.innerHTML=`OverWeight:greater than 24.9 BMI:${BMI}`

         }else{
            results.innerHTML = `<span>${BMI}</span>`
           
         }
         
    }



})
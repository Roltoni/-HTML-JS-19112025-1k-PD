
const inputfield = document.getElementById("svars")
const inputfield2 = document.getElementById("augums")
const button = document.getElementById("dalīt")
const outputfield = document.getElementById("output")

button.addEventListener('click', calcButton);
let result = 0
let result2 = 0
let result3 = 0
function calcButton(){
    result=inputfield2.value/100
    result2=result**2
   result3 = inputfield.value/result2
   output.innerHTML = result3
   if(result3<=18.99){
 console.log("Nepietiekama ķermeņa masa")
   }
   else if(result3<=24.99){
     console.log("Normāla ķermeņa masa")
   }
    else if(result3<=29.99){
 console.log("Lieka ķermeņa masa")
   }
   else{
      console.log("Aptaukošanās")
   }
}
function registration() {
let psd = 0;
const pass = "1234";
const nname = "nusu"
const mail = "nusu@gmail.com"
const name = document.getElementById("Name").value;
const email= document.getElementById("Email").value;
const password = document.getElementById("password").value;
  let hasNameError = true;
  let hasEmailError = true;
  let haspasserror = true;

if(!name || nname!=name || name.length < 3){
        document.getElementById("errorname").innerHTML = "Enter valid Name ";
        hasNameError = true ;
    }else{
        document.getElementById("errorname").innerHTML ="";
        hasNameError = false;
    }


if(email.length < 6){
     document.getElementById("errormail").innerHTML ="Invalid Mail";
      
    document.getElementById("errormail").style.color ="red";
}
 
if (!hasNameError && !hasEmailError) {
    document.getElementById("").innerHTML = ++psd;
  }

return false ;
}
let count = 0;
function sum(){

count = count +1;
 document.getElementById("sumb").value = count;
 return false;
}

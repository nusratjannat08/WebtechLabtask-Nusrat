let totalCount = 0;
let users = [];

let index=0;
    let hasfname = true;
    let haslname= true;
    let hasidError = true;
    let hasemail = true;
    let hascredit = true;
    let hasdept = true;
 
function validationform() {
 
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const sid = document.getElementById("sid").value;
    const email = document.getElementById("email").value;
    const credit = document.getElementById("credit").value;
    const dept = document.getElementById("dept").value;
  if (!fname) {
    document.getElementById("fnameError").innerHTML = "First Name can not be empty*";
  
    hasfname = true;
  } 
  else {
    document.getElementById("fnameError").innerHTML = "";
    hasfname = false;
   
  }
  

  if (!lname) {
    document.getElementById("lnameError").innerHTML = "Last Name can not be empty*";
    document.getElementById("lnameError").style.color = "red";
    haslname = true;
  } 
  else {
    document.getElementById("lnameError").innerHTML = "";
    haslname = false;
    
  }
  

  if (!email) {
    document.getElementById("emailError").innerHTML =
      "Email is a required fireld*";
    
    hasemail = true;
  } 
  else if (!email.includes("@student.aiub.edu")) {
    document.getElementById("emailError").innerHTML ="Please provide valid email*"
   
    hasemail = true;
  } else {
    document.getElementById("emailError").innerHTML = "";
    hasemail = false;
   
  }


  if (!sid) {
    document.getElementById("idError").innerHTML =
      "Student ID is a required *";
   
    hasidError = true;
  } 
  else if (!sid.includes("-")) {
    document.getElementById("idError").innerHTML =
      "Provide a valid ID*";
    document.getElementById("idError").style.color = "red";
    hasidError = true;
  } else {
    document.getElementById("idError").innerHTML = "";
    hasidError = false;
   
  }


  if (credit>148 || credit<0 || !credit) {
    document.getElementById("creditError").innerHTML =
      "Invalid Credit*";
    document.getElementById("creditError").style.color = "red";
    hascredit = true;
  } else {
    document.getElementById("creditError").innerHTML = "";
    hascredit = false;
    
  }


  if (!dept) {
    document.getElementById("deptError").innerHTML = "Department can not be empty*";

    hasdept = true;
  } 
  else {
    document.getElementById("deptError").innerHTML = "";
    hasdept = false;
   

  }

  
  
  return false;

}

function displayinfo(){
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const sid = document.getElementById("sid").value;
    const email = document.getElementById("email").value;
    const credit = document.getElementById("credit").value;
    const dept = document.getElementById("dept").value;
     validationform(); 
    if (!hasfname && !haslname && !hasidError && !hasemail && !hascredit && !hasdept) {
    
 
    users.push({
        firstname: fname,
        lasttname: lname,
        id:sid,
        emaill: email,
        creditt: credit,
        deptt:dept
    });
 
    let output = "";
 
    for (let i = 0; i < users.length; i++) {
 
        output += " "+ "<br>";
        output += " "+ "<br>";
        output += "FirstName : " + users[i].firstname + "<br>";
        output += "LastName : " + users[i].lasttname + "<br>";
        output += "Student ID : " + users[i].id + "<br>";
        output += "Email : " + users[i].emaill + "<br>";
        output += "Credit : " + users[i].creditt + "<br>";
        output += "Dept: " + users[i].deptt + "<br>";
       
    }
 
    document.getElementById("display").innerHTML = output;

    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("sid").value = "";
    document.getElementById("email").value = "";
    document.getElementById("credit").value = "";
    document.getElementById("dept").selectedIndex = 0;
}
  
  return false ;
    
}
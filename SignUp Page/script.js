function validateForm() {  
    //collect form data in JavaScript variables  
    var pw1 = document.getElementById("password").value;  
    var pw2 = document.getElementById("cpassword").value;  
    var name1 = document.getElementById("name").value;  
    var name2 = document.getElementById("uname").value;  
    var pnum = document.getElementById("pnumber").value             
    //character data validation  
    if(!isNaN(name1)){  
      alert("Only alphabets are allowed in name");  
      return false;  
    }  
    
    if(!(pnum.match(/^\d{10}$/))){
        alert("Enter a valid phone number");
        return false;
    }
    //minimum password length validation  
    if(pw1.length < 8) {  
      alert("Password length must be atleast 8 characters");  
      return false;  
    }  
  
    //maximum length of password validation  
    if(pw1.length > 15) {  
      alert("Password length must not exceed 15 characters");  
      return false;  
    }  
    
    if(pw1 != pw2) {  
      alert("Passwords are not same");  
      return false;  
    } else {  
      alert ("Your account has been created successfully");  
      document.signupform.reset();
    }  
 }  
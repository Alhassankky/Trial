 var form = document.getElementById('Login')

 form.addEventListener("submit", function(e){
    e.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    let emailVal = document.getElementById('emailVal');
    let passwordVal = document.getElementById('passwordVal');

    // if (email == ''){
    //     emailVal.innerHTML = "Email is required!"; 
    // } else{
    //     emailVal.innerHTML = "";
    // }
        
    // if (password == ''){
    //     passwordVal.innerHTML = "password is required!" ;
    // } else{
    //     passwordVal.innerHTML = "";}
    
    if (email == ''){
        emailVal.style.border = "5px solid red"; 
    } else{
        emailVal.style.border = " 5px solid green";
    }
        
    if (password == ''){
        passwordVal.style.border = "5px solid red" ;
    } else{
        passwordVal.style.border = "5px solid green";}
    
 })
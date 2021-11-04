function formSubmit(e){
    e.preventDefault();

    let username = document.getElementById('username').value;
    let fullname = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;
    let password = document.getElementById('password').value;
    let cpassword = document.getElementById('cpassword').value;

    let genderM = document.getElementById('male');
    let genderF = document.getElementById('female');
    let checkbox = document.getElementById('agree')
    let message = '';
    let at = /@/;

    if(fullname.length < 8){
        message = "Fullname must be greater than 8 characters and less than 50 characters!";
    }else if(fullname.length > 50){
        message = "Fullname must be greater than 8 characters and less than 50 characters!";
    }else if(username.length < 5){
        message = "Username must be greater than 5 characters and less than 10 characters!";
    }else if(username.length > 10){
        message = "Username must be greater than 5 characters and less than 10 characters!";
    }else if(email.length < 6){
        message = "Email must be greater than 6 characters!";
    }else if(!email.match(at)){
        message = "Email must contains '@' !";
    }else if(age < 13){
        message = "Your minimum age must be 13 years old!";
    }else if(password.length < 8){
        message = "Password must be greater than 8 characters!"
    }else if(cpassword != password){
        message = "To confirm this, you must be entered same password";
    }else if(genderM.checked==false && genderF.checked==false){
        message = "You must choose a gender!";
    }else if(!checkbox.checked) {
        message = "Please agree with terms and condition!";
    } else { 
        alert('Successful!');
        return true; 
    }
    showMessage(message);
}

function showMessage(str){
    let messageE = document.getElementById('error');
    messageE.innerHTML = str;
    setTimeout(()=>{
        messageE.innerHTML = '';
    },3000);
}


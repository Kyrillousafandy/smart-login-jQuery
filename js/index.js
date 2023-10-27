// all inputs
"use strict"
let signupName =$("#signupName");
let signupEmail = $("#signupEmail");
let signupPassword = $("#signupPassword");
let signinEmail = $("#signinEmail")
let signinPassword = $("#signinPassword");
let logBtn = $("#log");
let signBtn = $("#sign");
let userName = $("#username");
// let unsubscribe =$("#unsubscribe");
let ArrayContainer = [];
// to say welcome in home page
let username = localStorage.getItem('sessionUsername')
if (username!=null) {
     userName.html(`welcome ${username}`);
}

if (localStorage.getItem('users') == null) {
    ArrayContainer = []
} else {
    ArrayContainer = JSON.parse(localStorage.getItem('users'))
}

//for check inputs is empty or not
function isEmpty() {
    if (signupName.val() == "" || signupEmail.val() == "" || signupPassword.val() == "") {
        return false
    } else {
        return true
    }
}


// for check email is exist
function isEmailExist() {
    for (let i = 0; i < ArrayContainer.length; i++) {
        if (ArrayContainer[i].email.toLowerCase() == signupEmail.val().toLowerCase()) {
            return false
        }
    }
}



// ============= for login================
// for check inputs is empty or not
function isLoginEmpty() {

    if (signinPassword.val() == "" || signinEmail.val() == "") {
        return false
    } else {
        return true
    }
}








if(logBtn!=null){
    logBtn.click(function (e) { 
        if (isLoginEmpty() == false) {
            $("#incorrect").html('<span class="text-danger m-3">All inputs is required</span>')
            return false
        }
        let password = signinPassword.val()
        let email = signinEmail.val()
        for (let i = 0; i < ArrayContainer.length; i++) {
            if (ArrayContainer[i].email.toLowerCase() == email.toLowerCase() && ArrayContainer[i].password.toLowerCase() == password.toLowerCase()) {
                localStorage.setItem('sessionUsername', ArrayContainer[i].name)
                
             
                window.location.href="home.html"
            }
             
            else {
                $("#incorrect").html('<span class="p-2 text-danger">incorrect email or password</span>')
            }
        }
        
    });
}



if(signBtn!=null){
    signBtn.click(function (e) { 
        if (isEmpty() == false) {
            $("#exist").html('<span class="text-danger m-3">All inputs is required</span>')
            return false
        }
        // to store all value as object
        let signUp = {
            name: signupName.val(),
            email: signupEmail.val(),
            password: signupPassword.val(),
        }
        if (ArrayContainer.length == 0) {
            ArrayContainer.push(signUp)
            localStorage.setItem('users', JSON.stringify(ArrayContainer))
            $("#exist").html('<span class="text-success m-3">Success</span>')
            return true
        }
        if (isEmailExist() == false) {
            $("#exist").html('<span class="text-danger m-3">email already exists</span>')
    
        } else {
            ArrayContainer.push(signUp)
            localStorage.setItem('users', JSON.stringify(ArrayContainer))
    
            $("#exist").html('<span class="text-success m-3">Success</span>')
        }
    });
}






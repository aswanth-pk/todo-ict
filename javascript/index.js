const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');

const loginBtn = document.getElementById('login-btn');


loginBtn.addEventListener('click', validateInput);

function validateInput(){
    const uname = usernameField.value;
    const password = passwordField.value;
    if(uname == 'admin' && password == '12345'){
        return true;
    }
    else{
        alert("Wrong credentials");
        return false;
    }
}


let btn = document.getElementById('btnSubmit');

function validateForm() {
    var error = 0;
    var name = document.getElementById('signupName').value;
    document.getElementById('name_error').innerHTML = '';
    if (name == null || name == "" || name.length < 3) {
        error++;
        document.getElementById('name_error').innerHTML = 'Username must be atleast 3 charecter';
    }

    var email = document.getElementById('signupEmail').value;
    document.getElementById('email_error').innerHTML = '';
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        
       error = 0;
    }
    else{
         error++;
        document.getElementById('email_error').innerHTML = 'Email is not valid';
    }

    var pass = document.getElementById('signupPassword').value;
    document.getElementById('pass_error').innerHTML = '';
    if (pass == null || pass == ""|| pass.length < 6) {
        error++;
        document.getElementById('pass_error').innerHTML = 'Password must be atleast 6 charecter';
    }

    var pass_again = document.getElementById('signupPassword').value;
    document.getElementById('pass_again_error').innerHTML = '';
    if (pass == null || pass == ""){
        error++;
        document.getElementById('pass_error').innerHTML = 'Password2 is required';
    }
    else if(pass_again !== pass) {
        error++;
        document.getElementById('pass_again_error').innerHTML = 'Password2 dose not match';
    }

    if(error>0) {
        return false;
    }
    return true;
}


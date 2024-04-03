let PasswordSignup;
let RepeatPassword;

function checkPassword(){
    PasswordSignup = document.getElementById('Password').value;
    RepeatPassword = document.getElementById('RepeatPassword').value;
    if(PasswordSignup == RepeatPassword){
        alert("DANG KY THANH CONG");
    }
    else{
        alert("SAI MAT KHAU!!");
    } 
}
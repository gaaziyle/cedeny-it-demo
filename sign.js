// import {signup,formSignUp,close,closeLogin,seePswrd,hidePassword,seePasswordLogin,hidePasswordLogin,loginPage,loginS,backToSigninPage,change,clearStorage,showAlert,showAlertLong} from './burger'
const signupBtn = document.getElementById('signup');
const signin = document.getElementById('signin');
const section = document.getElementsByTagName("section");
const loginBtnL = document.getElementById('login-btn-l');
const login = document.getElementById('login');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password-s');
const rePasswordInput = document.getElementById('re-password');
const clearBtn = document.getElementById('clearBtn');
const orSignUp = document.getElementById('logininsign');
const cross = document.getElementById('closePopup');
const logoutBtn = document.getElementById('logout-btn');
const emailL = document.getElementById('email-l');
const allAlert = document.getElementsByClassName('alert');
const abcDiv = document.getElementById('abc');
const form1 = document.getElementById('form-1');
const buttonLoginPage = document.getElementById('login-btn');
const signinBtn = document.getElementById('sign-up-btn');
const crossLogin = document.getElementById('closePopup-loginpage');
const seePassword = document.getElementById('look-password');
const dseePassword = document.getElementById('dlook-password');
const loginpSeePassword = document.getElementById('login-page-look-password');
const loginpDseePassword = document.getElementById('login-page-dlook-password');
const loginPagePassword = document.getElementById('password-login');
const headerText = document.getElementById("right-content-h2");
const headerTextP = document.getElementById("right-content-p");





// Storage
const storageName = localStorage.getItem('name');
const storageEmail = localStorage.getItem('email');
const storagePassword = localStorage.getItem('password');
const storageRePassword = localStorage.getItem('re-password');




signupBtn.addEventListener("click", signup);
function signup() {
    signin.style.display = "grid";

    e.preventDefault();
};


signinBtn.addEventListener('click',formSignUp);
function formSignUp(e) {
    
    if (nameInput.length < 4) {

        showAlert("warning", 'Please enter name greater than 3 characters');
    }

    else if (passwordInput.value !== rePasswordInput.value) {
        showAlert("warning", 'Passwords must match.');

    }
    else if (passwordInput.value == '' || nameInput.value == '' || emailInput.value == '' || rePasswordInput.value == '') {


        showAlert("warning", 'Please fill in all the blanks');

    }
    

    else if (passwordInput.value.length < 6) {


        showAlert("warning", 'Password must be 6 characters or greater');

    }
    else {
        localStorage.setItem('name', nameInput.value);
        localStorage.setItem('email', emailInput.value);
        localStorage.setItem('password', passwordInput.value);
        localStorage.setItem('re-password', rePasswordInput.value);
        showAlert("success","Successfully registered, please login");
        setTimeout(() => {
            signin.style.display = "none";
            login.style.display = "grid";
                
        }, 1000);
        

    }
    
    e.preventDefault();

};


cross.addEventListener("click", close)
function close() {
    signin.style.display = "none";
    
};
crossLogin.addEventListener('click',closeLogin)
function closeLogin(){
    login.style.display = "none";

};

seePassword.addEventListener("click", seePswrd)

function seePswrd(e){
    passwordInput.type = "text";
    seePassword.style.display="none";
    dseePassword.style.display = "block"
}

dseePassword.addEventListener('click', hidePassword)

function hidePassword(e) {
    passwordInput.type= "password";
    seePassword.style.display = "block";
    dseePassword.style.display = "none"
}

loginpSeePassword.addEventListener('click', seePasswordLogin)

function seePasswordLogin(e){
    loginPagePassword.type= "text";
    loginpSeePassword.style.display = "none";
    loginpDseePassword.style.display = "block"
}
loginpDseePassword.addEventListener('click', hidePasswordLogin)

function hidePasswordLogin(){
    loginPagePassword.type= "password";
    loginpSeePassword.style.display = "block";
    loginpDseePassword.style.display = "none"

}

loginBtnL.addEventListener("click", loginPage);
function loginPage(e) {
    setTimeout(() => {
        signin.style.display = "none";
        login.style.display = "grid";
        
    }, 500);
    
    e.preventDefault();
};

buttonLoginPage.addEventListener("click",loginS)
function loginS(e) {// kontrolleri yapman lazım
   if(passwordInput.value !== storagePassword){
       setTimeout(() => {
        window.location.reload()
           
       }, 500);
   }
   else{
       setTimeout(() => {
           window.location.reload;
       }, 1000);
   }
   e.preventDefault();
    

};
orSignUp.addEventListener('click',backToSigninPage)
function backToSigninPage(e) {
    setTimeout(() => {
        
        signin.style.display = "grid";
        login.style.display = "none";
    }, 500);

    e.preventDefault();

};

function change() {
    if (storageName.value === "") {
        // 
    }
    else if (storageName.value === nameInput.value) {
        signupBtn.href = null;
    }
    else {
        signupBtn.innerHTML = storageName;
        headerText.textContent = ("Welcome" + " " + storageName)
        headerTextP.textContent = ("Dear" + " " + storageName + "," + " " + "this site is in demo for a while. Contact us for your comments and suggestions")
        signupBtn.href = "myAccount.html";
        if (signupBtn.innerHTML == storageName) {
            signin.remove();
        }


    }

}
change();



clearBtn.addEventListener("click", clearStorage);

function clearStorage() {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('re-password');
}



function showAlert(type, message) {
    const alert = document.createElement("div");

    alert.className = `alert alert-${type}`;
    alert.innerHTML = message;
    abcDiv.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 3000);

};
function showAlertLong(type, message) {
    const alert = document.createElement("div");

    alert.className = `alert alert-${type}`;
    alert.innerHTML = message;
    abcDiv.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 7000);

};


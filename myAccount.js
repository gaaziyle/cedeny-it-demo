const userName = document.getElementById('des-name');
const userEmail = document.getElementById('des-email');
const editNameInput = document.getElementById('account-input');
const editNameBtn = document.getElementById('edit-name-btn');
const editEmailInput= document.getElementById('account-input-email');
const editEmailBtn = document.getElementById('edit-email-btn');
const crossInputName = document.getElementById('cross-name-input');
const crossInputEmail = document.getElementById('cross-email-input');
const clearBtnAcc = document.getElementById('clearBtn');


// Storage

const userStorageName = localStorage.getItem('name');
const userStorageEmail = localStorage.getItem('email');
const userStoragePassword = localStorage.getItem('password');
const userStorageRePassword = localStorage.getItem('re-password');

function change() {
    userName.innerHTML = ("Name : " + userStorageName + "&nbsp;<button class='edit-pencil' onclick='editName()'>Edit Name</button>");
    userEmail.innerHTML = ("Email : " + userStorageEmail + "&nbsp;<button class='edit-pencil' onclick='editEmail()'>Edit Email</button>");
    
}
change();

function editName(e) {
    setTimeout(() => {
        editNameInput.style.display = "block";
        editNameBtn.style.display = "inline-block";
        editNameInput.value = userStorageName;
        crossInputName.style.display = "block";
    }, 500);
    
    // const newInput = document.createElement('input');
    // const newButton = document.createElement("button");
    // newButton.innerHTML = "<ion-icon name='checkmark-outline'></ion-icon>";
    // newButton.classList = "edit-name-btn"
    
    
    // newInput.classList = "account-input";
    // newInput.value = userStorageName;
    // userName.appendChild(newInput)
    // userName.appendChild(newButton)
    
    e.preventDefault();
}
function editEmail(e) {
    setTimeout(() => {
        editEmailInput.style.display = "block";
        editEmailBtn.style.display = "inline-block";
        editEmailInput.value = userStorageEmail;
        crossInputEmail.style.display = "block";

    }, 500);
    // const newInput = document.createElement('input');
    // const newButton = document.createElement("button");
    // newButton.innerHTML = "<ion-icon name='checkmark-outline'></ion-icon>";
    // newButton.classList = "edit-name-btn"
    
    
    // newInput.classList = "account-input";
    // newInput.value = userStorageName;
    // userName.appendChild(newInput)
    // userName.appendChild(newButton)
    e.preventDefault();
}




crossInputName.addEventListener('click',closeNameInput)

function closeNameInput() {
    setTimeout(() => {
        editNameInput.style.display = "none";
        editNameBtn.style.display = "none";
    
        crossInputName.style.display = "none";
    
    }, 300);
}
crossInputEmail.addEventListener('click',closeEmailInput)

function closeEmailInput() {
        
    setTimeout(() => {
        editEmailInput.style.display = "none";
        editEmailBtn.style.display = "none";
    
        crossInputEmail.style.display = "none";
    }, 300);
    
}





editNameBtn.addEventListener('click',updateUserName);

function updateUserName() {
    showAlert("noti","İsim güncelleniyor, lütfen bekleyin...")
    
    setTimeout(() => {
    localStorage.setItem('name', editNameInput.value);
    showAlert("success","İsim başarıyla güncellendi")
        
    }, 3000);    
    setTimeout(() => {
        window.location.reload();

    }, 4500);

};


editEmailBtn.addEventListener('click',updateUserEmail);

function updateUserEmail() {
    showAlert("noti","Email güncelleniyor, lütfen bekleyin...")
    
    setTimeout(() => {
    localStorage.setItem('email', editEmailInput.value);
    showAlert("success","Email başarıyla güncellendi")
        
    }, 3000);    
    setTimeout(() => {
        window.location.reload();

    }, 4500);
};

function showAlert(type, message) {
    const alert = document.createElement("div");

    alert.className = `alert alert-${type}`;
    alert.innerHTML = message;
    abcDiv.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 3000);

};

clearBtnAcc.addEventListener('click',clearStorageAcc)

function clearStorageAcc(e) {
    localStorage.clear();
    showAlert("noti","Hesap siliniyor, lütfen bekleyin...")

    setTimeout(() => {
        showAlert("success","Hesap silindi <ion-icon name='checkmark-outline'></ion-icon>")

    }, 3000);
    setTimeout(() => {
        window.location.href = "index.html"

    }, 4000);

    
}

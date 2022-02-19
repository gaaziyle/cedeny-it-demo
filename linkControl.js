const aloginBtn  =document.getElementById('login-btn');

aloginBtn.addEventListener('click', changeUrl)

function changeUrl(){
    window.history.pushState({}, "", "success")
}
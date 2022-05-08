const burgerMenu = document.getElementById('menu-btn');
const menuBtnBurger = document.getElementById('menu-btn_burger')
const ulDiv = document.getElementById('menu-btn_bg');
const menuUl = document.getElementById('burger-menu-ul');
const firstSectionn = document.getElementById('first-section');
let burgerMenuU = false;
burgerMenu.addEventListener('click',openUlDiv);


function openUlDiv(){
    if(!burgerMenuU){
    ulDiv.style.display = "flex";

    setTimeout(() => {

        ulDiv.style.marginTop = "0";
        burgerMenu.style.background = "black";
        burgerMenu.style.borderRadius = "5px";
        

    }, 100);
    burgerMenuU = true;

    }
    else{
        ulDiv.style.marginTop = "-2000px";
        burgerMenu.style.background = "transparent";
        burgerMenu.style.borderRadius = "5px"   
        setTimeout(() => {
       
        ulDiv.style.display = "none";


    }, 1000);
    burgerMenuU = false;

    }
    
    
}
// const signupBtnBurger = document.getElementById('signup');
// const signinForm = document.getElementById('signin');
// signupBtnBurger.addEventListener("click", signupBurger);
// function signupBurger(e) {
//     signinForm.style.display = "grid";

//     e.preventDefault();
// };

// firstSectionn.addEventListener('click',closeBurger)

// function closeBurger(){
//     ulDiv.style.marginTop = "-2000px";
//         burgerMenu.style.background = "transparent";
//         burgerMenu.style.borderRadius = "5px"   
//         setTimeout(() => {
       
//         ulDiv.style.display = "none";


//     }, 1000);
//     burgerMenuU = false;
// }


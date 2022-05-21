const header = document.getElementById('header');
const nav = document.getElementById('nav');
const regBtn = document.getElementById('reg-log-btn');

window.addEventListener("scroll",function(){

    if(window.scrollY > 100){
        header.style.background = "rgb(22, 22, 22)";
        header.style.boxShadow = "0px 0px 49px 0px rgb(22, 22, 22)"

    }
    
    else{
        header.style.background = "transparent";
        header.style.boxShadow = "none";

        
    }


});


var title = document.title;
    var newTitle = "Do not forget us :)";

    window.onblur = function(){
        setTimeout(() => {
        document.title = newTitle;
            
        }, 2000);
    }

    window.onfocus = function()
    {
        document.title = title;
    }


   



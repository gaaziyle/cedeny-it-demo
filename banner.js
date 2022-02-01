const btnOk = document.getElementById('banner-ok');
const banner = document.getElementById('cookies-banner');
const firstSection = document.getElementById('first-section');
const secondSection = document.getElementById('second-section');
const bannerDiv = document.getElementById('banner-div');
const arrowDown = document.getElementById('arrow-down')


banner.addEventListener('click',openBanner);
function openBanner(e){
    // banner.style.height = "4%"
    // banner.style.width = "10%"
    // banner.innerHTML = "Çerezler kabul edildi"
    // banner.style.marginLeft = "10px"
    // banner.style.borderTopLeftRadius = "5px"
    // banner.style.borderTopRightRadius = "5px"
    // banner.style.border = "1px solid white"
    // banner.style.borderBottom = "none"
    // banner.style.color = "black"
    // banner.style.textAlign = "center"
    // banner.style.background = "white"
    // banner.style.paddingTop = "7px"
    // banner.style.fontFamily = "Abel"
    // banner.style.fontSize = "16px"
    // banner.href = "cookies.html"
    // banner.style.cursor = "pointer"
    banner.style.width = "100%"
    banner.style.height = "25%"
    banner.style.display = "block"
    banner.style.marginLeft= "0px"
    banner.style.textAlign = "left"
    banner.style.background = "white"
    banner.style.color = "black";
    banner.style.borderTopLeftRadius ="0"
    banner.style.borderTopRightRadius ="0"
    banner.style.cursor = "auto"
    banner.innerHTML = `
    <div class="cookie-consent-banner__inner">
    <div class="cookie-consent-banner__copy">
      <div class="cookie-consent-banner__header">THIS WEBSITE USES COOKIES</div>
      <div class="cookie-consent-banner__description">We use cookies to personalize content and ads, provide social media features and analyze our traffic. We also share information about your use of our site with our social media, advertising and analytics partners; they may combine this with other information that you provide to them or that they collect from your use of their services. If you continue to use our website, you accept our cookies. Scroll to close here</div>
    </div>

    <div class="cookie-consent-banner__actions">
     
    </div>
  </div>`

    e.preventDefault();
    
};
document.addEventListener("scroll",closeBanner);

function closeBanner() {
  if(window.scrollY > 200){
  banner.style.marginBottom = "-30%"
  setTimeout(() => {
    banner.style.display = "none"
  }, 2000);
  }
  
  e.preventDefault(); 
}




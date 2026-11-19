
document.addEventListener('DOMContentLoaded',()=>{
 const banner=document.getElementById('cookieBanner');
 if(banner && !localStorage.getItem('cookieChoice')) banner.style.display='block';
 const accept=document.getElementById('acceptCookies');
 if(accept) accept.addEventListener('click',()=>{localStorage.setItem('cookieChoice','accepted');banner.style.display='none'});
 const reject=document.getElementById('rejectCookies');
 if(reject) reject.addEventListener('click',()=>{localStorage.setItem('cookieChoice','essential');banner.style.display='none'});
});

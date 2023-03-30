'use strickt';
const profileHeader = document.getElementById('profile-dropdown');
const profileHeaderList = document.getElementById('profile-list');

profileHeader.addEventListener('click', () => {
  profileHeaderList.classList.toggle('drop-open');
});

const currentLink = window.location.href;
const links = document.querySelectorAll('.navbar-left__list-link');

for (let i = 0; i < links.length; i++) {
  if (links[i].href === currentLink) {
    links[i].classList.add('nav-active');
  } else {
    links[i].classList.remove('nav-active');
  }
}
//Delete to Laravel
let urlDash = window.location.href;
let dashStart = document.getElementById('dash-start');
document.addEventListener("DOMContentLoaded", ()=> {
    if(url.indexOf('http://127.0.0.1:5500/dashboard.html') != -1) {
        dashStart.classList.add('nav-active');
    }
})

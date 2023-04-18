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

const openNavMobile = document.getElementById('open-nav');
const iconOpenNav = document.getElementById('icon-open-nav');
openNavMobile.addEventListener('click', () => {
  for (let value of links) value.classList.toggle('nav-mobile-open');
  iconOpenNav.classList.toggle('close-nav');
});

//Delete to Laravel
let urlDash = window.location.href;
let dashStart = document.getElementById('dash-start');
document.addEventListener('DOMContentLoaded', () => {
  if (url.indexOf('http://127.0.0.1:5500/dashboard.html') != -1) {
    dashStart.classList.add('nav-active');
  }
});

//Invested page show/hide
const btnPageInvestment = document.getElementById('investments');
const btnPageInvested = document.getElementById('invested');
const pageInvestment = document.getElementById('page-investment');
const pageInvested = document.getElementById('page-invested');

btnPageInvestment.addEventListener('click', () => {
  btnPageInvestment.classList.add('invest-page-active');
  btnPageInvested.classList.remove('invest-page-active');
  pageInvestment.classList.add('invest-active');
  pageInvested.classList.remove('invest-active');
});

btnPageInvested.addEventListener('click', () => {
  btnPageInvestment.classList.remove('invest-page-active');
  btnPageInvested.classList.add('invest-page-active');
  pageInvestment.classList.remove('invest-active');
  pageInvested.classList.add('invest-active');
});

'use strickt'
const profileHeader = document.getElementById('profile-dropdown');
const profileHeaderList = document.getElementById('profile-list');

profileHeader.addEventListener('click', ()=> {
    profileHeaderList.classList.toggle('drop-open');
})
const email = document.querySelector('.derecha-email');
const DesktopMenu = document.querySelector('.desktop-menu');

email.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu (){
    DesktopMenu.classList.toggle('inactive')
}
const email = document.querySelector('.derecha-email');
const DesktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.burguer-menu');
const MobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.derecha-shopping-cart');
const aside = document.querySelector('.product-detail');

email.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleCarritoSide);
function toggleDesktopMenu (){
    DesktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}
function toggleMobileMenu(params) {
    MobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');}

function toggleCarritoSide(params) {
    MobileMenu.classList.add('inactive');
    aside.classList.toggle('inactive'); 
    DesktopMenu.classList.add('inactive');
}
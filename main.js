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

const productList =[];
productList.push({
      nombre:'Panque',
      price:199,
      img:'./assets/okara.jfif'
    }
);
productList.push({
    nombre:'Panque de platano',
    price:199,
    img:'./assets/okara.jfif'
  }
);
productList.push({
    nombre:'Leche de soya',
    price:199,
    img:'./assets/okara.jfif'
  }
);
productList.push({
    nombre:'Rosca de reyes',
    price:199,
    img:'./assets/okara.jfif'
  }
);

for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const imagen = document.createElement('img');
    imagen.setAttribute('src', product.img);

    const productInfo = document.createElement
}
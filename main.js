const email = document.querySelector('.derecha-email');
const DesktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.burguer-menu');
const MobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.derecha-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

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

// <!-- <div class="product-card">
// <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
// <div class="product-info">
//   <div>
//     <p>$120,00</p>
//     <p>Bike</p>
//   </div>
//   <figure>
//     <img src="./assets/bt_add_to_cart.svg" alt="">
//   </figure>
// </div>
// </div> -->
function renderProducts(arr) {
for (product of productList){
    

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.img);
    const productInfo =document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    
    const productPrice =document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.nombre;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './assets/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
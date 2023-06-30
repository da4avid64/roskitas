const email = document.querySelector('.derecha-email');
const DesktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.burguer-menu');
const MobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.derecha-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const myOrderContent = document.querySelector('.my-order-content');

email.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleCarritoSide);

function toggleDesktopMenu() {
  DesktopMenu.classList.toggle('inactive');
  shoppingCartContainer.classList.add('inactive');
}

function toggleMobileMenu() {
  MobileMenu.classList.toggle('inactive');
  shoppingCartContainer.classList.add('inactive');
}

function toggleCarritoSide() {
  MobileMenu.classList.add('inactive');
  shoppingCartContainer.classList.toggle('inactive');
  DesktopMenu.classList.add('inactive');
}

const productList = [];
productList.push({
  nombre: 'Panque',
  price: 199,
  img: './assets/okara.jfif'
});

function renderProducts(arr) {
  for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.img);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
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
function addToCart() {
  const productImgSrc = this.parentNode.parentNode.querySelector('img').getAttribute('src');
  const productName = this.parentNode.parentNode.querySelector('div p:last-child').innerText;
  const productPrice = this.parentNode.querySelector('div p:first-child').innerText.replace('$', '');

  const shoppingCartDiv = document.createElement('div');
  shoppingCartDiv.classList.add('shopping-cart');

  const productFigure = document.createElement('figure');
  const productImg = document.createElement('img');
  productImg.setAttribute('src', productImgSrc);
  productFigure.appendChild(productImg);

  const productNameParagraph = document.createElement('p');
  productNameParagraph.innerText = productName;

  const productPriceParagraph = document.createElement('p');
  productPriceParagraph.innerText = '$' + productPrice;
  productPriceParagraph.classList.add('mount-price');

  const closeIcon = document.createElement('img');
  closeIcon.setAttribute('src', './assets/icon_close.png');
  closeIcon.setAttribute('alt', 'close');

  shoppingCartDiv.appendChild(productFigure);
  shoppingCartDiv.appendChild(productNameParagraph);
  shoppingCartDiv.appendChild(productPriceParagraph);
  shoppingCartDiv.appendChild(closeIcon);

  const orderDiv = myOrderContent.querySelector('.order');
  myOrderContent.insertBefore(shoppingCartDiv, orderDiv);

  const totalAmount = Array.from(document.querySelectorAll('.mount-price')).reduce((sum, element) => {
    return sum + parseFloat(element.innerText.replace('$', ''));
  }, 0);

  const totalAmountParagraph = myOrderContent.querySelector('.order p:last-child');
  totalAmountParagraph.innerText = '$' + totalAmount.toFixed(2);
}

const addToCartButtons = document.querySelectorAll('.product-info figure');
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

const orderDiv = document.createElement('div');
orderDiv.classList.add('order');

const orderParagraph = document.createElement('p');
const totalSpan = document.createElement('span');
totalSpan.innerText = 'Total';
orderParagraph.appendChild(totalSpan);

const totalAmountParagraph = document.createElement('p');
totalAmountParagraph.innerText = '$0';

orderDiv.appendChild(orderParagraph);
orderDiv.appendChild(totalAmountParagraph);

const checkoutButton = document.createElement('button');
checkoutButton.classList.add('primary-button');
checkoutButton.innerText = 'Checkout';

myOrderContent.appendChild(orderDiv);
myOrderContent.appendChild(checkoutButton);
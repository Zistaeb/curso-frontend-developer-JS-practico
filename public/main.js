const menuEmail = document.querySelector(".navbar-email");
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const menuHamburguerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamburguerIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
};

function toggleMobileMenu() {
    const isAsideClose = shoppingCartContainer.classList.contains("inactive");

    if(!isAsideClose) {
        shoppingCartContainer.classList.add("inactive"); 
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle("inactive");
};

function toggleCarritoAside() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    
    if(!isMobileMenuClose) {
        mobileMenu.classList.add("inactive"); 
    }

    const isProductDetailClose = productDetailContainer.classList.contains('inactive');
    
    if(!isProductDetailClose) {
        productDetailContainer.classList.add("inactive"); 
    }

    shoppingCartContainer.classList.toggle("inactive");

};

function openProductDetailAside(product) {
    return () => {
        document.getElementById('details-img').setAttribute('src', product.image);
        document.getElementById('details-price').innerText = product.price;
        document.getElementById('details-name').innerText = product.name;
        shoppingCartContainer.classList.add('inactive');
        productDetailContainer.classList.remove("inactive");
    };
};

function closeProductDetailAside() {
    productDetailContainer.classList.add("inactive");
};

const productList = [];

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Screen",
    price: 220,
    image: "./img/pantalla.png",
});

productList.push({
    name: "Computer",
    price: 620,
    image: "./img/computadora.png",
});

/*<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> */

function renderProducts (arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        /// product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside(product));
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", './icons/bt_add_to_cart.svg' );
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }; 
};

renderProducts(productList);

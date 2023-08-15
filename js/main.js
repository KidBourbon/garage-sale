// Elements from the document
const navbarEmail = document.querySelector('.navbar__email');
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const navbarShoppingCart = document.querySelector('.navbar__shopping-cart');
const cardsContainer = document.querySelector('.cards-container');
const productDetailsCloseIcon = document.querySelector(
	'.product-details__close-icon'
);

// Menus to show or hide
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.shopping-cart');
const productDetails = document.querySelector('.product-details');

navbarEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu);
navbarShoppingCart.addEventListener('click', toggleShoppingCart);
productDetailsCloseIcon.addEventListener('click', function () {
	closeMenus([productDetails]);
});

// Functions to show or hide menus
function toggleDesktopMenu() {
	closeMenus([shoppingCart, productDetails]);

	desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
	closeMenus([shoppingCart, productDetails]);

	mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
	closeMenus([desktopMenu, mobileMenu, productDetails]);

	shoppingCart.classList.toggle('inactive');
}

function toggleProductDetails() {
	closeMenus([desktopMenu, mobileMenu, shoppingCart]);

	productDetails.classList.toggle('inactive');
}

function closeMenus(menuArray) {
	for (let menu of menuArray) {
		menu.classList.add('inactive');
	}
}

function openMenus(menuArray) {
	for (let menu of menuArray) {
		menu.classList.remove('inactive');
	}
}

// List with all my products
const productList = [];

// Random product
const product = {
	name: 'Bike',
	price: 120,
	image:
		'https://images.pexels.com/photos/17211591/pexels-photo-17211591/free-photo-of-bicycle-parked-under-building-painted-blue.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
};

// Amount of products to render
let amountProducts = 6;

// Add n-products to my product list
for (let i = 0; i < amountProducts; i++) {
	productList.push(product);
}

// Create the html elements corresponding to each product in the given array
function renderProducts(productArray) {
	for (let product of productArray) {
		const productCard = document.createElement('div');
		productCard.classList.add('cards-container__product-card');

		const productCardImage = document.createElement('img');
		productCardImage.classList.add('product-card__image');
		productCardImage.setAttribute('src', product.image);
		productCardImage.setAttribute('alt', 'Product');
		productCardImage.addEventListener('click', function () {
			closeMenus([desktopMenu, mobileMenu, shoppingCart]);
			openMenus([productDetails]);
		});

		const productCardFooter = document.createElement('div');
		productCardFooter.classList.add('product-card__footer');

		const productCardInfo = document.createElement('div');
		productCardInfo.classList.add('product-card__info');

		const productPrice = document.createElement('p');
		productPrice.innerText = '$' + product.price;
		const productName = document.createElement('p');
		productName.innerText = product.name;

		const productFigure = document.createElement('figure');
		const shoppingCartIcon = document.createElement('img');
		shoppingCartIcon.classList.add('product-card__shopping-cart-icon');
		shoppingCartIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
		shoppingCartIcon.setAttribute('alt', 'Shopping cart icon');

		productCard.appendChild(productCardImage);
		productCard.appendChild(productCardFooter);

		productCardFooter.appendChild(productCardInfo);
		productCardFooter.appendChild(productFigure);

		productCardInfo.appendChild(productPrice);
		productCardInfo.appendChild(productName);

		productFigure.appendChild(shoppingCartIcon);

		cardsContainer.appendChild(productCard);
	}
}

renderProducts(productList);

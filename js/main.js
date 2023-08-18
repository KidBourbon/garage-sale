// Categories
const categoryAll = 'All';
const categoryClothes = 'Clothes';
const categoryElectronics = 'Electronics';
const categoryFurnitures = 'Furnitures';
const categoryToys = 'Toys';
const categoryOthers = 'Others';

// Html elements from the document
const navbarTabAll = document.querySelector('.navbar__tab-all');
const navbarTabClothes = document.querySelector('.navbar__tab-clothes');
const navbarTabElectronics = document.querySelector('.navbar__tab-electronics');
const navbarTabFurnitures = document.querySelector('.navbar__tab-furnitures');
const navbarTabToys = document.querySelector('.navbar__tab-toys');
const navbarTabOthers = document.querySelector('.navbar__tab-others');
const navbarEmail = document.querySelector('.navbar__email');

const mobileMenuCategoryAll = document.querySelector(
	'.mobile-menu__category-all'
);
const mobileMenuCategoryClothes = document.querySelector(
	'.mobile-menu__category-clothes'
);
const mobileMenuCategoryElectronics = document.querySelector(
	'.mobile-menu__category-electronics'
);
const mobileMenuCategoryFurnitures = document.querySelector(
	'.mobile-menu__category-furnitures'
);
const mobileMenuCategoryToys = document.querySelector(
	'.mobile-menu__category-toys'
);
const mobileMenuCategoryOthers = document.querySelector(
	'.mobile-menu__category-others'
);

const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const navbarShoppingCart = document.querySelector('.navbar__shopping-cart');
const cardsContainer = document.querySelector('.cards-container');
const productDetailsCloseIcon = document.querySelector(
	'.product-details__close-icon'
);
const shoppingCartCloseIcon = document.querySelector(
	'.shopping-cart__close-icon'
);

const productDetailsImage = document.querySelector('.product-details__image');
const productDetailsPrice = document.querySelector('.product-details__price');
const productDetailsName = document.querySelector('.product-details__name');
const productDetailsDescription = document.querySelector(
	'.product-details__description'
);

// Menus to show or hide
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.shopping-cart');
const productDetails = document.querySelector('.product-details');

// Array with all my products
const myProducts = [
	{
		name: 'Blue Jeans',
		price: 16,
		category: categoryClothes,
		description:
			"Men's and women's blue jeans with little time of use. Very comfortable when walking. Perfect for a casual outing with your family, friends or even your partner.",
		image: '../images/blue-jeans.webp',
	},
	{
		name: 'Laptop',
		price: 400,
		category: categoryElectronics,
		description:
			'Laptop for work purposes. It has little time of use. Advanced hardware features. No technical problems.',
		image: '../images/laptop.webp',
	},
	{
		name: 'Sofa',
		price: 280,
		category: categoryFurnitures,
		description:
			'Quite comfortable sofa with soft pillows. It has space for 4 people. Plenty of room to take a nap. Perfect for sharing with your family, your friends or your partner on a movie night.',
		image: '../images/sofa.webp',
	},
	{
		name: 'Luigi, Yoshi and Mario',
		price: 27,
		category: categoryToys,
		description:
			'Collectible figurines of Luigi, Yoshi and Mario. They are small, so be careful when small children play with them.',
		image: '../images/toys.webp',
	},
	{
		name: 'Bike',
		price: 120,
		category: categoryOthers,
		description:
			'Bike made for dirt roads. Very useful and practical for mountain or forest excursions. Also suitable for paved roads.',
		image: '../images/bike.webp',
	},
];

// Adding events to html elements
navbarEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu);
navbarShoppingCart.addEventListener('click', toggleShoppingCart);
productDetailsCloseIcon.addEventListener('click', function () {
	closeMenus([productDetails]);
});
shoppingCartCloseIcon.addEventListener('click', function () {
	closeMenus([shoppingCart]);
});

// Added events to navbar tabs
navbarTabAll.addEventListener('click', function () {
	renderProducts(categoryAll);
});
navbarTabClothes.addEventListener('click', function () {
	renderProducts(categoryClothes);
});
navbarTabElectronics.addEventListener('click', function () {
	renderProducts(categoryElectronics);
});
navbarTabFurnitures.addEventListener('click', function () {
	renderProducts(categoryFurnitures);
});
navbarTabToys.addEventListener('click', function () {
	renderProducts(categoryToys);
});
navbarTabOthers.addEventListener('click', function () {
	renderProducts(categoryOthers);
});

// Added events to mobile menu categories
mobileMenuCategoryAll.addEventListener('click', function () {
	renderProducts(categoryAll);
	closeMenus([mobileMenu]);
});
mobileMenuCategoryClothes.addEventListener('click', function () {
	renderProducts(categoryClothes);
	closeMenus([mobileMenu]);
});
mobileMenuCategoryElectronics.addEventListener('click', function () {
	renderProducts(categoryElectronics);
	closeMenus([mobileMenu]);
});
mobileMenuCategoryFurnitures.addEventListener('click', function () {
	renderProducts(categoryFurnitures);
	closeMenus([mobileMenu]);
});
mobileMenuCategoryToys.addEventListener('click', function () {
	renderProducts(categoryToys);
	closeMenus([mobileMenu]);
});
mobileMenuCategoryOthers.addEventListener('click', function () {
	renderProducts(categoryOthers);
	closeMenus([mobileMenu]);
});

/**
 * Shows or hides the desktop menu
 * @return {void} Nothing
 */
function toggleDesktopMenu() {
	closeMenus([shoppingCart, productDetails]);

	desktopMenu.classList.toggle('inactive');
}

/**
 * Shows or hides the mobile menu
 * @return {void} Nothing
 */
function toggleMobileMenu() {
	closeMenus([shoppingCart, productDetails]);

	mobileMenu.classList.toggle('inactive');
}

/**
 * Shows or hides the shopping cart menu
 * @return {void} Nothing
 */
function toggleShoppingCart() {
	closeMenus([desktopMenu, mobileMenu, productDetails]);

	shoppingCart.classList.toggle('inactive');
}

/**
 * Shows or hides the product details menu
 * @return {void} Nothing
 */
function toggleProductDetails() {
	closeMenus([desktopMenu, mobileMenu, shoppingCart]);

	productDetails.classList.toggle('inactive');
}

/**
 * Hides all given menus
 * @param {Array} menus Array with menus
 * @return {void} Nothing
 */
function closeMenus(menus) {
	for (const menu of menus) {
		menu.classList.add('inactive');
	}
}

/**
 * Shows all given menus
 * @param {Array} menus Array with menus
 * @return {void} Nothing
 */
function openMenus(menus) {
	for (const menu of menus) {
		menu.classList.remove('inactive');
	}
}

/**
 * Returns a product in my list of products given a category
 * @param {string} category The given category
 * @return {Object} The product with the given category
 */
function getProductByCategory(category) {
	for (const product of myProducts) {
		if (product.category === category) {
			return product;
		}
	}
}

/**
 * Generates a certain amount of equal products
 * @param {Array} products The products to be generated
 * @param {number} amount The amount of each product to be generated
 * @return {Array} An array with all the generated products
 */
function generateProducts(products, amount) {
	const productsGenerated = [];

	for (const product of products) {
		for (let i = 0; i < amount; i++) {
			productsGenerated.push(product);
		}
	}

	return productsGenerated;
}

/**
 * Create the html elements corresponding to each product in the given array
 * @param {Array} products - Array with products
 * @return {void} Nothing
 */
function generateProductCardHTML(products) {
	/* PRODUCT CARD STRUCTURE

	<div class="cards-container__product-card">
		<img
			class="product-card__image"
			src="https://images.pexels.com/photos/17211591/pexels-photo-17211591/free-photo-of-bicycle-parked-under-building-painted-blue.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
			alt="Product"
		/>

		<div class="product-card__footer">
			<div class="product-card__info">
				<p>$120,00</p>
				<p>Bike</p>
			</div>

			<figure>
				<img
					class="product-card__shopping-cart-icon"
					src="./icons/bt_add_to_cart.svg"
					alt="Shopping cart icon"
				/>
			</figure>
		</div>
	</div>

	*/

	// Remove all cards
	while (cardsContainer.hasChildNodes()) {
		cardsContainer.removeChild(cardsContainer.firstChild);
	}

	// Code replicating the above structure
	for (const product of products) {
		const productCard = document.createElement('div');
		productCard.classList.add('cards-container__product-card');

		const productCardImage = document.createElement('img');
		productCardImage.classList.add('product-card__image');
		productCardImage.setAttribute('src', product.image);
		productCardImage.setAttribute('alt', product.name);
		productCardImage.addEventListener('click', function () {
			productDetailsImage.setAttribute('src', product.image);
			productDetailsPrice.innerText = '$' + product.price;
			productDetailsName.innerText = product.name;
			productDetailsDescription.innerText = product.description;

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

function renderProducts(category) {
	let product = {};
	let productsToRender = [];

	if (category === categoryAll) {
		productsToRender = generateProducts(myProducts, 15);
	} else {
		product = getProductByCategory(category);
		productsToRender = generateProducts([product], 15);
	}

	generateProductCardHTML(productsToRender);
}

renderProducts('All');

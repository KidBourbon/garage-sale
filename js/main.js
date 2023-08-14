const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');

navbarEmail.addEventListener('click', toogleDesktopMenu);
mobileMenuIcon.addEventListener('click', toogleMobileMenu);

function toogleDesktopMenu() {
	desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu() {
	mobileMenu.classList.toggle('inactive');
}

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
const navItems = document.querySelectorAll('.nav-item');
const navOverlay = document.querySelector('.nav-overlay');



hamburgerMenu.addEventListener('click', navEvent);

navOverlay.addEventListener('click', navEvent);

function navEvent() {
	hamburgerMenu.classList.toggle('active');
	navMenu.classList.toggle('active');
	navOverlay.classList.toggle('active');
};

navItems.forEach(function(navItem, index) {
	navItem.style.transitionDelay = `${0.11 + (index * 0.05)}s`;
})
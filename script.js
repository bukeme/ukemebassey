const hamburgerMenu = document.querySelector('.hamburger-menu');



hamburgerMenu.addEventListener('click', function() {
	this.classList.toggle('active');
});
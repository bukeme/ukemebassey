const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
const navItems = document.querySelectorAll('.nav-item');
const navOverlay = document.querySelector('.nav-overlay');
const aboutmeImg = document.querySelector('.about-me__img-con');
const aboutmeText = document.querySelector('.about-me__text');
const skills = document.querySelectorAll('.skill');
const projectCards = document.querySelectorAll('.project-card');
const navLinks = document.querySelectorAll('.nav-item a');

let animationItemList = [aboutmeImg, aboutmeText];
animationItemList = animationItemList.concat(Array.from(skills), Array.from(projectCards));



hamburgerMenu.addEventListener('click', navEvent);

navOverlay.addEventListener('click', navEvent);

navLinks.forEach((navLink) => navLink.addEventListener('click', navEvent));

function navEvent() {
	hamburgerMenu.classList.toggle('active');
	navMenu.classList.toggle('active');
	navOverlay.classList.toggle('active');
};

navItems.forEach(function(navItem, index) {
	navItem.style.transitionDelay = `${0.11 + (index * 0.05)}s`;
});

function animateContent(itemList) {
	itemList.forEach(function(item) {
		let triggerLine = window.innerHeight - +item.dataset.line;
		let itemLine = item.getBoundingClientRect().top;
		if (itemLine <= triggerLine) {
			item.classList.add('animate');
		}
	});
};

window.addEventListener('scroll', function() {
	animateContent(animationItemList);
})
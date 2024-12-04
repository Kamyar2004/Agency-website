'use strict';

const navIcon = document.querySelector('.nav__toggle-icon');
const mobileMenu = document.querySelector('.mobile-wrapper');
const closeIcon = document.querySelector('.nav__close-icon');
let isMenuOpen = false;

navIcon.addEventListener('click', function () {
	navIcon.classList.toggle('nav__toggle-line--clicked');
	setTimeout(function () {
		navIcon.classList.toggle('nav__toggle-line--clicked');
	}, 150);
	if (!isMenuOpen) {
		mobileMenu.style.left = '0';
		isMenuOpen = true;
	} else {
		mobileMenu.style.left = '-25rem';
		isMenuOpen = false;
	}
});

closeIcon.addEventListener('click', function () {
	mobileMenu.style.left = '-25rem';
	isMenuOpen = false;
});

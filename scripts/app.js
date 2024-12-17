'use strict';

const navIcon = document.querySelector('.nav__toggle-icon');
const mobileMenu = document.querySelector('.mobile-wrapper');
const closeIcon = document.querySelector('.nav__close-icon');
let isMenuOpen = false;
const counter_1 = document.querySelector('.counter-1');
const counter_2 = document.querySelector('.counter-2');
const counter_3 = document.querySelector('.counter-3');
const counter_4 = document.querySelector('.counter-4');
const counter_5 = document.querySelector('.counter-5');

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

function animateNumber(element, start, end, duration) {
	const range = end - start;
	const stepTime = Math.abs(Math.floor(duration / range));
	let current = start;
	const timer = setInterval(function () {
		current++;
		element.textContent = current;
		if (current === end) {
			clearInterval(timer);
		}
	}, stepTime);
}

// document.addEventListener('DOMContentLoaded', function () {
// 	animateNumber(counter_1, 0, 200, 4000);
// 	animateNumber(counter_2, 0, 280, 4000);
// 	animateNumber(counter_3, 0, 100, 4000);
// 	animateNumber(counter_4, 0, 420, 4000);
// 	animateNumber(counter_5, 0, 10, 4000);
// });

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
const questionItems = document.querySelectorAll('.question-body__item');
// const questionTitles = document.querySelectorAll('.question-body__title');
// const showBtns = document.querySelectorAll('.show-icon');
// const showBtnLines = document.querySelectorAll('.show-icon__line');

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

questionItems.forEach(function (item) {
	const showBtn = item.querySelector('.show-icon');
	const questionTitle = item.querySelector('.question-body__title');
	const showBtnLine = item.querySelector('.show-icon__line');

	showBtn.addEventListener('click', function () {
		if (item.classList.contains('question-body__item--open')) {
			item.classList.remove('question-body__item--open');
			questionTitle.classList.remove('question-body__title--open');
			showBtnLine.classList.remove('show-icon__line--open');
		} else {
			questionItems.forEach(function (item) {
				const questionTitle = item.querySelector('.question-body__title');
				const showBtnLine = item.querySelector('.show-icon__line');
				item.classList.remove('question-body__item--open');
				questionTitle.classList.remove('question-body__title--open');
				showBtnLine.classList.remove('show-icon__line--open');
			});
			item.classList.add('question-body__item--open');
			questionTitle.classList.add('question-body__title--open');
			showBtnLine.classList.add('show-icon__line--open');
		}
	});
});

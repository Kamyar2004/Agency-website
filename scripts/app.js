'use strict';

const navIcon = document.querySelector('.nav__toggle-icon');

navIcon.addEventListener('click', function () {
	navIcon.classList.toggle('nav__toggle-line--clicked');
	setTimeout(function () {
		navIcon.classList.toggle('nav__toggle-line--clicked');
	}, 150);
});

function checkBtn() {
	const btn = document.querySelector('.form__select');
	const list = document.querySelector('.form__select-list');

	btn.addEventListener('click', () => {
		console.log('Hello');
		list.classList.toggle('form__select-list-show');
	});
}

function menuOpen() {
	const menu = document.querySelector('.menu__box');

	menu.addEventListener('click', () => {
		console.log(1);
		document.querySelector('.menu__box-line--2').classList.toggle('hide');
		document.querySelector('.menu__box-line--1').classList.toggle('rotate45');
		document.querySelector('.menu__box-line--3').classList.toggle('rotate-45');
		document.querySelector('.header__nav').classList.toggle('show');
	});
}

export { checkBtn, menuOpen };

const btn = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const dropdowns = document.querySelector('.dropdown');
const menuQty = document.querySelector('.menu-qty');
const arrow = document.querySelector('.arrow');

btn.addEventListener('click', ()=>{
	btn.classList.toggle('menu-open');
	menu.classList.toggle('menu-open');
	body.classList.toggle('lock');
});

dropdowns.addEventListener('click', ()=>{
	dropdowns.classList.toggle('menu-qty--open');
	menuQty.classList.toggle('menu-qty--open');
	arrow.classList.toggle('arrow-rotate');
});

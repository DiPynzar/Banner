const slideWidth = 475;
const slider = document.querySelector('.slider');
const sliderList = document.querySelector('.slider__list');
const slides = document.querySelectorAll('.slider__item');
const btnPrev = document.querySelector('.arrow__left');
const btnNext = document.querySelector('.arrow__right');
let current = 0;
const interval = 3000;

sliderList.style.width = slides.length * slideWidth + 'px';

btnPrev.addEventListener('click', () => scrollToPrev())
btnNext.addEventListener('click', () => scrollToNext())

let sliderTimer = setInterval(scrollToNext, interval);
slider.addEventListener('mouseover', () => clearInterval(sliderTimer))
slider.addEventListener('mouseout', () => sliderTimer = setInterval(scrollToNext, interval))

function scrollToPrev() {
	current--;
	if (current < 0) {
		let children = sliderList.children;
		sliderList.style.transition = null;
		sliderList.style.left = -(current + 2) * slideWidth + 'px';
		sliderList.insertBefore(children[slides.length - 1], children[0]);
		children[0].offsetParent
		current++;
	}
	sliderList.style.transition = 'left 0.6s ease-in-out';
	sliderList.style.left = -(slideWidth * current) + 'px';
}

function scrollToNext() {
	current++;
	if (current > slides.length - 1) {
		let children = sliderList.children;
		sliderList.style.transition = null;
		sliderList.style.left = -(current - 2) * slideWidth + 'px';
		sliderList.appendChild(children[0].cloneNode(true));
		sliderList.removeChild(children[0]);
		children[0].offsetParent
		current--;
	}
	sliderList.style.left = -(slideWidth * current) + 'px';
	sliderList.style.transition = 'left 0.6s ease-in-out';
}

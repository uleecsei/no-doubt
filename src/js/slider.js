"use strict";

document.addEventListener("DOMContentLoaded", function(){
	let slider = new Slider(document.querySelectorAll(".slider")[0]);
});

class Slider{
	constructor(container){
		this._container = container;
		this._slideIndex = 0;
		this.init();
	}

	init(){
		this.findNodes();
		this.bindAll();
		this.addEvents();
		// this.start();
		this.autoRunSlide();
	}

	findNodes(){
		this._nodes = {
			slides: this._container.querySelectorAll(".slider__item"),
			prev: this._container.querySelector(".js-slider-prev"),
			next: this._container.querySelector(".js-slider-next"),
			dots: this._container.querySelectorAll(".slider-dots__btn")
		}
	}

	addEvents(){
		this._container.addEventListener("click", this.stop);
		this._nodes.prev.addEventListener("click", this.showPreviousSlide);
		this._nodes.next.addEventListener("click", this.showNextSlide);
		for (let i = 0; i < this._nodes.dots.length; i++ ) {
			this._nodes.dots[i].addEventListener("click", ()=>{this.showCurrentSlide(i)});
		}
	}

	bindAll(){
		this.stop = this.stop.bind(this);
		this.showCurrentSlide = this.showCurrentSlide.bind(this);
		this.showPreviousSlide = this.showPreviousSlide.bind(this);
		this.showNextSlide = this.showNextSlide.bind(this);
	}

	showNextSlide(){
		this.showSlide(this._slideIndex += 1);
	}

	showPreviousSlide(){
		this.showSlide(this._slideIndex -= 1);
	}

	showCurrentSlide(slideNumber){
		this._slideIndex = slideNumber;
		this.showSlide(slideNumber);
	}

	showSlide(slideNumber){
		if (slideNumber > this._nodes.slides.length - 1) {
			this._slideIndex = 0;
		}
		if (slideNumber < 0) {
			this._slideIndex = this._nodes.slides.length - 1;
		}
		this.hideSlides();
		this.deActivateDots();
		this.activateSlide();
		this.activateDot();
	}

	activateSlide(){
		this._nodes.slides[this._slideIndex].style.display = "block";
	}

	activateDot(){
		this._nodes.dots[this._slideIndex].className += " slider-dots__btn--active";
	}

	deActivateDots(){
		for (let i = 0; i < this._nodes.dots.length; i++) {
			this._nodes.dots[i].className = this._nodes.dots[i].className.replace(" slider-dots__btn--active", "");
		}
	}

	hideSlides(){
		for (let i = 0; i < this._nodes.slides.length; i++) {
				this._nodes.slides[i].style.display = "none";
		}
	}

	start(){
		this.showSlide(this._slideIndex);
	}

	autoRunSlide(){
		this._timerId = setInterval(()=>{this.showSlide(++this._slideIndex)}, 3000);
	}

	stop(){
		clearTimeout(this._timerId);
	}
}
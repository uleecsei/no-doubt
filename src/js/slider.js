"use strict";

document.addEventListener("DOMContentLoaded", function(){
    let slider = new Slider(document.querySelectorAll(".slider")[0]);
})

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
        this.start();
    }

    findNodes(){
        this._nodes = {
            slides: this._container.querySelectorAll(".slider__item"),
            prev: this._container.querySelector(".js-slider-prev"),
            next: this._container.querySelector(".js-slider-next"),
            dots: this._container.querySelectorAll(".slider-dots__btn")
        }
        console.dir(this._nodes);
    }

    addEvents(){
        this._container.addEventListener("click", this.stop);
        this._nodes.prev.addEventListener("click", this.showPreviousSlide);
        this._nodes.next.addEventListener("click", this.showNextSlide);
    }

    bindAll(){
        this.stop = this.stop.bind(this);
        this.showPreviousSlide = this.showPreviousSlide.bind(this);
        this.showNextSlide = this.showNextSlide.bind(this);
    }

    showNextSlide(){

    }

    showPreviousSlide(){

    }

    showSlide(slideNumber){

    }

    hideSlides(){
        for (let i = 0; i < this._nodes.slides.length; i++) {
            this._nodes.slides[i].style.display = "none";
        }
    }

    start(){
        this.hideSlides();
    }

    stop(){

    }
}
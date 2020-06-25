'use strict';

let slider = document.querySelector('.slider');

let loadIcon = document.createElement('i');
loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
slider.insertAdjacentElement('afterbegin', loadIcon);

let rightArrow = document.createElement('i');
rightArrow.classList.add('fas', 'fa-chevron-circle-right', 'slider-rightArrow');
slider.insertAdjacentElement('beforeend', rightArrow);

let leftArrow = document.createElement('i');
leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow');
slider.insertAdjacentElement('beforeend', leftArrow);

window.addEventListener('load', function() {
    loadIcon.style.display = 'none';
    images.init();

    leftArrow.addEventListener('click', function() {
        images.setNextLeftImage();
    });

    rightArrow.addEventListener('click', function() {
        images.setNextRightImage();
    });
});

function setSizes(slider) {
    let width = slider.getAttribute("data-width");
    let height = slider.getAttribute("data-height");
    if (width !== null && width !== "") {
        slider.style.width = width;
    }
    if (height !== null && height !== "") {
        slider.style.height = height;
    }
}
setSizes(slider);

let images = {
    currentIdx: 0,
    slides: [],

    init() {
        this.slides = document.querySelectorAll('.slider-item');
        this.showImageWithCurrentIdx();
    },

    showImageWithCurrentIdx() {
        this.slides[this.currentIdx].classList.remove('hidden-slide');
    },

    hideVisibleImage() {
        document.querySelector('.slider-item:not(.hidden-slide)').classList.add('hidden-slide');
    },

    setNextLeftImage() {
        this.hideVisibleImage();
        if (this.currentIdx == 0) {
            this.currentIdx = this.slides.length - 1;
        } else {
            this.currentIdx--;
        }
        const currentSlide = this.slides[this.currentIdx];
        currentSlide.classList.add('slider-rightToLeftAnimation');
        currentSlide.classList.remove('hidden-slide');
        // this.showImageWithCurrentIdx();
        setTimeout(() => {
            currentSlide.classList.remove('slider-rightToLeftAnimation');
        }, 500);
    },

    setNextRightImage() {
        this.hideVisibleImage();
        if (this.currentIdx == this.slides.length - 1) {
            this.currentIdx = 0;
        } else {
            this.currentIdx++;
        }
        // this.showImageWithCurrentIdx();
        const currentSlide = this.slides[this.currentIdx];
        currentSlide.classList.add('slider-leftToRightAnimation');
        currentSlide.classList.remove('hidden-slide');
        setTimeout(() => {
            currentSlide.classList.remove('slider-leftToRightAnimation');
        }, 500);
    },
};
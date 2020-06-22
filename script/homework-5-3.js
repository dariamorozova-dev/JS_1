'use strict';

const modal = document.querySelector('.modal');
const button = document.querySelector('#btnModal');
const spanClose = document.querySelector('.close');

spanClose.addEventListener('click', function(event) {
    modal.classList.remove('animate__flipInY');
    modal.classList.add('animate__flipOutY');
    setTimeout(function() {
        modal.classList.add('hidden');
    }, 1100)
});

button.addEventListener('click', function(event) {
    modal.classList.remove('animate__flipOutY', 'hidden');
    modal.classList.add('animate__animated', 'animate__flipInY');
});




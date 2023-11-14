"use strict";

const textBlock = document.querySelector('span');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    textBlock.innerHTML = 'JS code has been added properly';
});

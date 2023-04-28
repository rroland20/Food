require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import tabs from './moduls/tabs';
import modal, { openModal } from './moduls/modal';
import timer from './moduls/timer';
import calc from './moduls/calc';
import cards from './moduls/cards';
import forms from './moduls/forms';
import slider from './moduls/slider';

document.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);
          
    tabs(".tabheader__item", ".tabcontent", ".tabheader__items", 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2023-06-11');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
});
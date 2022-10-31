'use strict';

// 5
function ex5() {
    console.log(document.querySelector('#ex5__input').value);
}


// 6
function ex6() {
    document.querySelector('#ex6__input').value = 'Ой, я поменял свой текст!';
}


// 7
function ex7() {
    document.querySelector('.ex7 > img').setAttribute('src', 'assets/img/2.jpg');
}


// 8
const ex8_input = document.querySelector('#ex8__input');
ex8_input.onclick = function() {
    console.log(this.value);
}


// 9
const ex9_input = document.querySelector('#ex9__input');
ex9_input.onclick = function() {
    this.value = 'Ой, я поменял свой текст!';
}

// 10
const ex10_input = document.querySelector('#ex10__input');
ex10_input.onclick = function() {
    this.value = 'Ой, я поменял свой текст!';
}

ex10_input.onblur = function() {
    this.value = 'Ой, а теперь еще раз поменял!';
}


// 11
const ex11_input = document.querySelector('#ex11__input');
ex11_input.onclick = function() {
    this.value = 'Ку-ку';
}


// 12
const ex12_input = document.querySelector('#ex12__input');
ex12_input.onclick = function() {
    this.setAttribute('disabled', '');
    this.value = 'Ой, теперь на меня больше не нажать!';
}

// 13
const ex13_img = document.querySelector('.ex13 > img');
ex13_img.onmouseover = function() {
    this.setAttribute('src', 'assets/img/2.jpg');
}

ex13_img.onmouseout = function() {
    this.setAttribute('src', 'assets/img/1.jpg');
}


// 14
const ex14_input = document.querySelector('#ex14__input');
ex14_input.onclick = function() {
    this.style.color = 'red';
    this.style.width = '300px';
}


// 15
const ex15_input = document.querySelector('#ex15__input');
const button_hide = document.querySelector('#ex15__button_hide');
const button_show = document.querySelector('#ex15__button_show');

button_hide.onclick = function() {
    ex15_input.hidden = true;
}

button_show.onclick = function() {
    ex15_input.hidden = false;
}


// 16
const ex16_input = document.querySelector('#ex16__input');
const ex16_button = document.querySelector('#ex16__button');
ex16_button.onclick = () => {
    ex16_input.value = 'Ой, я поменял свой текст и css!';
    ex16_input.style.borderRadius = '15px';
    ex16_input.style.color = 'red';
    ex16_input.style.padding = '15px';
}


// 17
const ex17_input1 = document.querySelector('#ex17__input1');
const ex17_input2 = document.querySelector('#ex17__input2');
ex17_input1.onclick = function() {
    this.setAttribute('disabled', '');
    this.value = 'О, теперь на меня больше не нажать!';
    ex17_input2.style.display = 'initial';
}

ex17_input2.onclick = function() {
    this.style.display = 'none';
    ex17_input1.removeAttribute('disabled');
}


// 18
const ex18_button = document.querySelector('#ex18__button');
ex18_button.onclick = function() {
    this.innerHTML = parseInt(this.innerHTML) + 1;
}


// 19
const ex19_input = document.querySelector('#ex19__input');
const ex19_button = document.querySelector('#ex19__button');
ex19_button.onclick = () => {
    ex19_input.style.float = 'right';
    ex19_input.value = 'Теперь я плаваю справа!';
}


// 20
const ex20_input = document.querySelector('#ex20__input');
const ex20_button = document.querySelector('#ex20__button');
ex20_button.onclick = () => {
    let classes = ex20_input.classList;
    ex20_input.value = `Мои css классы: ${classes}`;
}


// 21
const ex21_button = document.querySelector('#ex21__button');
const ex21_input1 = document.querySelector('#ex21__input1');
const ex21_input2 = document.querySelector('#ex21__input2');

ex21_button.onclick = () => {
    let transfer = ex21_input1.value;
    ex21_input1.value = ex21_input2.value;
    ex21_input2.value = transfer;
}


// 22
const ex22_input = document.querySelector('#ex22__input');
const ex22_result = document.querySelector('#ex22__result');
const ex22_button = document.querySelector('#ex22__button');
ex22_button.onclick = () => {
    ex22_result.value = parseInt(ex22_input.value) ** 2;
}


// 23
const ex23_input = document.querySelector('#ex23__input');
const ex23_result = document.querySelector('#ex23__result');
const ex23_button = document.querySelector('#ex23__button');

ex23_button.onclick = () => {
    if ( !isNaN( parseInt(ex23_input.value) ) )
        ex23_result.value = parseInt(ex23_input.value) ** 2;
    else
        ex23_result.value = 'Введено не число!';
}


// 24
const ex24_input = document.querySelector('#ex24__input');
ex24_input.onclick = function() {
    this.setAttribute('disabled', '');
}


// 25
const ex25_input = document.querySelector('#ex25__input');
const ex25_number = document.querySelectorAll('.ex25__number');

ex25_number.forEach(button => {
    button.onclick = function() {
        ex25_input.value += parseInt(this.innerHTML);
    }
})
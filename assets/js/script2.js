'use strict';


// 1
const button1 = document.querySelector('.button1');
const p1 = document.querySelector('.p1');

button1.onclick = () => {
    p1.innerHTML = 'Ку-ку! а я <b>жирный</b>!';
}


// 2
const button2 = document.querySelector('.ex2 button');
const p2 = document.querySelector('.ex2 > p');

button2.onclick = () => {
    p2.outerHTML = '<h3>Абзац превратился в h3!</h3>';
}


// 3
const button3 = document.querySelector('.ex3 button');
const p3 = document.querySelector('.ex3 > p');

button3.onclick = () => {
    let text = p3.innerHTML;
    p3.outerHTML = `<h3>${text}</h3>`;
}


// 4
const button4 = document.querySelector('.ex4 button');
button4.onclick = () => {
    let num1 = parseInt( document.querySelector('#input4-1').value );
    let num2 = parseInt( document.querySelector('#input4-2').value );

    document.querySelector('.ex4 span').innerHTML = num1 + num2;
}


// 5
const button5 = document.querySelector('.ex5 button');
button5.onclick = () => {
    document.querySelectorAll('.ex5 p').forEach(p => {
        p.innerHTML = 'Ку-ку!';
    })
}


// 6, 7
const www = document.querySelectorAll('.www');
let i = 1;
www.forEach(w => {
    w.innerHTML = i;
    i++;
})


// 8
const myClass = document.querySelector('.my-class');
const button8 = document.querySelector('.ex8 button');
button8.onclick = () => {
    console.log(myClass.className);
}


// 9
const buttonRemove = document.querySelector('#remove');
const buttonWrite9 = document.querySelector('#write9');
const p9 = document.querySelector('.ex9 p');

buttonWrite9.onclick = () => {
    console.log(p9.className);
}

buttonRemove.onclick = () => {
    p9.removeAttribute('class');
}


// 10
const buttonWrite10 = document.querySelector('#write10');
const buttonSwap = document.querySelector('#swap');
const p10 = document.querySelector('.ex10 p');

buttonWrite10.onclick = () => {
    console.log(p10.className);
}

buttonSwap.onclick = () => {
    p10.className = 'new-class';
}


// 11
const input11 = document.querySelector('.ex11 input');
const span11 = document.querySelector('.ex11 span');

input11.onkeyup = () => {
    span11.textContent = input11.value;
}


// 12
const a12 = document.querySelectorAll('.ex12 a');
const button12 = document.querySelector('.ex12 button');

button12.onclick = () => {
    a12.forEach(a => {
        a.textContent += '(' + a.getAttribute('href') + ')';
    })
}


// 13
const button13 = document.querySelector('.ex13 button');
const p13 = document.querySelector('.ex13 p');

button13.onclick = function() {
    p13.textContent = 'Привет, мир!';
    p13.style.color = 'red';
    this.setAttribute('disabled', '');
    this.textContent = 'О, на меня нельзя больше нажать'
}


// 14
const button14 = document.querySelector('.ex14 button');
const p14 = document.querySelectorAll('.ex14 p');

i = 0;
button14.onclick = function() {
    p14.forEach(elem => {
        elem.textContent = i;
        i++;
    })
}


// 15
const button15 = document.querySelector('.ex15 button');
const p15 = document.querySelectorAll('.ex15 p');

i = 0;
button15.onclick = function() {
    p15.forEach(elem => {
        elem.prepend(i + '. ');
        i++;
    })
}
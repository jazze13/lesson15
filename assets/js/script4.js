'use strict';

// 1
document.querySelector('.ex1 > input').onclick = () => {
    const span = document.querySelector('.ex1 > span');
    let timer = setInterval(() => {
        span.textContent = parseInt(span.textContent) + 1;
    }, 1000)
}


// 2
const ex2start = document.querySelector('.ex2 .start');
ex2start.onclick = function() {
    const span = document.querySelector('.ex2 > span');

    let timer = setInterval(() => {
        span.textContent = parseInt(span.textContent) + 1;
    }, 1000)
    
    const stop = document.querySelector('.ex2 .stop');
    stop.disabled = false;
    this.disabled = true;

    stop.onclick = function() {
        clearInterval(timer);
        this.disabled = true;
        ex2start.disabled = false;
    }
}


// 3
const ex3span = document.querySelector('.ex3 > span');
setInterval(() => {
    let time = new Date(),
        hours = zero(time.getHours()),
        minutes = zero(time.getMinutes()),
        seconds = zero(time.getSeconds()),
        clock = `${hours}:${minutes}:${seconds}`;

    ex3span.textContent = clock;

}, 1000);

function zero(a) {
    if (a >= 0 && a < 10)
    return '0' + a;
    return a;
}


// 4
document.querySelector('.ex4 input').onclick = function() {
    const span = document.querySelector('.ex4 > span');
    this.disabled = true;

    let countdown = setInterval(() => {
        span.textContent = parseInt(span.textContent) - 1;

        if (span.textContent == 0) {
            this.value = 'Countdown ended.';
            clearInterval(countdown);
        }

    }, 1000);

}


// 5
const ex5img = document.querySelector('.ex5 img');

function timer(counter=1) {
    if (counter > 3)
    counter = 1;
    
    ex5img.src = `assets/img/${counter}.png`;
    setTimeout(() => timer(counter + 1), 1000);
}

timer();


// 6
const img61 = document.querySelector('.ex6 .img1'),
      img62 = document.querySelector('.ex6 .img2'),
      img63 = document.querySelector('.ex6 .img3');

setInterval(() => {
        let temp = img61.src;
        img61.src = img62.src;
        img62.src = img63.src;
        img63.src = temp;
}, 1000);


// 7

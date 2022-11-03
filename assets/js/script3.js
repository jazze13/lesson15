'use strict';

let date = new Date();

let seconds = date.getSeconds(),
    minutes = date.getMinutes(),
    hours = date.getHours(),
    day = date.getDate(),
    month = date.getMonth(),
    year = date.getFullYear();

// 1
console.log('1: current day:', day);

// 2
console.log('2: current month:', month);

// 3
console.log('3: current year:', year);

// 4
console.log(`4: ${zero(hours)}:${zero(minutes)}:${zero(seconds)} ${zero(day)}.${zero(month)}.${year}`);

function zero(a) {
    if (a >= 0 && a < 10)
        return '0' + a;
    return a;
}


// 5
console.log('5: current day number:', date.getDay());

// 6
console.log('6:', dayByNumber(4));

function dayByNumber(a) {
    let days = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
    return days[a + 1];
}


// 7
let ancientDate = new Date(2015, 0, 7);
console.log('7:', dayByNumber( ancientDate.getDay() ) );

// 8
console.log( '8:', parseInt(date.getTime() / 1000 / 60) );

// 9
let now = date.getTime(),
    then = Date.parse('1988-03-01T12:59:59');
console.log('9:', parseInt( (now - then) / 1000 / 60 / 60) );

// 10
let dayBegin = Date.parse('2022-11-03T00:00:01');
console.log('10:', now - dayBegin);

// 11
const input = document.querySelector('input');
let daysBeforeBirthday;
input.onblur = function() {
    let birthDate = input.value,
        birthYear = +birthDate.slice(0, 4),
        birthMonth = +birthDate.slice(5, 7),
        birthDay = +birthDate.slice(8, 10);
    
        if (birthMonth < date.getMonth() + 1 || ( birthMonth == date.getMonth() + 1 && birthDay <= date.getDate() ) ) {
            birthYear = date.getFullYear() + 1;
        } else {
            birthYear = date.getFullYear();
        }
    
    birthDate = `${birthYear}-${birthMonth}-${birthDay}`;
        
    daysBeforeBirthday = Math.ceil( ( Date.parse(birthDate) - date.getTime() ) / 1000 / 60 / 60 / 24);

    document.querySelector('span').textContent = daysBeforeBirthday;
}
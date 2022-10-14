const out1 = document.querySelector('.out-1');
function getRandomInt(){
    const min1 = 117;
    const max1 = 132;
    let rand = Math.floor(min1 + Math.random() * (max1 + 1 - min1));
    console.log(rand);
    return rand;
    }
    out1.innerHTML = getRandomInt()

const out2 = document.querySelector('.out-2');
    let min = 888;
    let max = 900;
function getRandomInt2( min , max){
        let rand2 = Math.floor(min + Math.random() * (max + 1 - min));
        console.log(rand2);
        return rand2;
}
    out2.innerHTML = getRandomInt2( min , max)
    
const out3 = document.querySelector('.out-3');

function hello() {
    out3.innerHTML = "Hello ";
}

function f2021() {
    out3.innerHTML += 2021;
}

function t3() {
    hello();
    f2021();
       // тут вызываете hello и f2021
}
document.querySelector('.b-3').addEventListener('click', t3);
//

const out4 = document.querySelector('.out-4');

function t4() {
    function hello() {
        out4.innerHTML = 'Hello ';
    }
    function f2021() {
        hello();
        out4.innerHTML += 2021;
    }
    f2021();
}

function t4_1(){
    t4();
}// тут ваша функция t4_1

 document.querySelector('.b-4').addEventListener('click', t4_1);

/////////////////////////////////////////////////////////////////////////
 const out5 = document.querySelector('.out-5');

function odd() {
    out5.textContent = 'odd';
}

function even() {
    out5.textContent = 'even';
}

let inputIn = document.querySelector('.i-5');

function t5() {
    let a = inputIn.value;
    if ( a % 2 == 0){
        even();
    } else {
        odd();
    }

}

document.querySelector('.b-5').addEventListener('click', t5);
///////////////////////////////////////////////
const out6 = document.querySelector('.out-6');

function t6() {
    function odd() {
        out6.textContent = 'odd';
    }
    function even() {
        out6.textContent = 'even';
    }
    let min = 10000;
    let max = 10099;
    // тут запускаете getRandomInt2
        
        let b = getRandomInt2( min , max)
        if (b % 2 == 0){
            even(); 
        } else {
            odd();
        }
}
document.querySelector('.b-6').addEventListener('click', t6);

const out7 = document.querySelector('.out-7');
let z7 = 91;

function t7() {
    
    out7.textContent = z7;
    console.log(z7);    
    if (z7 >= 99){
        z7 = 99;
    }
    z7++;
    return z7;
}
document.querySelector('.b-7').addEventListener('click', t7);

const out8 = document.querySelector('.out-8');
const digit = ['нуль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
let z8 = 0;

function showNumber() {
    out8.innerHTML = digit[z8];
}

function t8() {
    z8++;
    if ( z8 == 10 ){
        z8 = 0;
    }
    console.log(z8);
    showNumber();
}

document.querySelector('.b-8').addEventListener('click', t8);
///////////////////////////////////////////////////////////////////////////////////////

let z9 = 5;
const s9 = document.querySelector('.s-9');

function t9() {
    document.querySelector('.s-9').value = z9;
}

document.querySelector('.b-9').addEventListener('click', t9);

/////////////////////////////////////////////////////////////////////////////////////////

const out10 = document.querySelector('.out-10');
let ar10 = [1, 2, 3, '4', '22', 8];
let ar10_res = [];

function showArr() {
    out10.textContent = ar10_res.join('_');
}

function t10() {
    ar10_res = []; // очищаем
    ar10_res = ar10.filter(function(currentValue){
        return (typeof currentValue == "number")
    });
    showArr();
}

document.querySelector('.b-10').addEventListener('click', t10);
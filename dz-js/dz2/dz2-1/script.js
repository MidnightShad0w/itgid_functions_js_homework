function t1(min, max) {
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    document.querySelector('.out-1').textContent = rand;
}
document.querySelector('.b-1').addEventListener('click', function () {
    t1(120, 140);
})
/////////////////////////////////////////////////////////////////////////////////////
function t2(min, max, block) {
    let x = Math.floor(min + Math.random() * (max + 1 - min));
    block.textContent = x;
}

document.querySelector('.b-2').addEventListener('click', function () {
    const out2 = document.querySelector('.out-2');
    t2(120, 140, out2); // функция должна вывести случайное целое от 120 до 140 в блок out-2
})
/////////////////////////////////////////////////////////////////////////////////////
function t3(min = 0, max = 100) {
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    document.querySelector('.out-3').textContent = rand;
}

document.querySelector('.b-3').addEventListener('click', function () {
    t3();
})
/////////////////////////////////////////////////////////////////////////////////////
function t4(a, b, c) {
    let t = a / b;
    document.querySelector('.out-4').textContent = t;
    if (b == 0){
        document.querySelector('.out-4').textContent = c;
    }
}

document.querySelector('.b-4').addEventListener('click', function () {
    t4(7, 12, false);
})
/////////////////////////////////////////////////////////////////////////////////////
const out6 = document.querySelector('.out-6');

function t6(arr, block) {
    block.textContent = arr.join(' ');
}

document.querySelector('.b-6').addEventListener('click', function () {
    t6([99, 44, 55, 66], out6);
})
/////////////////////////////////////////////////////////////////////////////////////
const out8 = document.querySelector('.out-8');

function t8(block, text) {
    text = text.trim();
    block.textContent = text.toLowerCase();
}

document.querySelector('.b-8').addEventListener('click', function () {
    t8(out8, ' HelLO wORLd       ');
})
/////////////////////////////////////////////////////////////////////////////////////
const out10 = document.querySelector('.out-10');

function t10() {
    out10.innerHTML = arguments.length;
}

document.querySelector('.b-10').addEventListener('click', function () {
    t10(33, 22, 44, 11, 55, 66, 11, 66);
})
/////////////////////////////////////////////////////////////////////////////////////
const out11 = document.querySelector('.out-11');

function t11() {
    let j = 0;
    for (let i = 0; i < arguments.length; i++){
        j += arguments[i];
    }
    out11.innerHTML = j;
}

document.querySelector('.b-11').addEventListener('click', function () {
    t11(33, 22, 44, 11, 55, 66, 11, 66);
})
/////////////////////////////////////////////////////////////////////////////////////
const out12 = document.querySelector('.out-12');

function t12(...args) {
    let j = 0;
    for (let i = 0; i < args.length; i++){
        j += args[i];
    }
    out12.innerHTML = j;
}

document.querySelector('.b-12').addEventListener('click', function () {
    t12(33, 22, 44, 11, 55, 66, 11, 66);
})
/////////////////////////////////////////////////////////////////////////////////////
const out13 = document.querySelector('.out-13');

function t13(arr, funcArg) {
    funcArg(arr);
}

// функции для вывода уже заготовлены
function showArrSpace(arr) {
    out13.innerHTML = arr.join(' ');
}

function showArrUnderscore(arr) {
    out13.innerHTML = arr.join('_');
}

document.querySelector('.b-13').addEventListener('click', function () {
    t13([3, 4, 5], showArrUnderscore);
    // попробуйте также вместо showArrSpace поставить showArrUnderscore
})
/////////////////////////////////////////////////////////////////////////////////////
const out14 = document.querySelector('.out-14');

function t14(arr, funcArg, block) {
    block.textContent = funcArg(arr);
}

// функции для вывода уже заготовлены
function showArrSpace2(arr, block) {
    block.textContent = arr.join(' ');// вывод в блок пишите как в предыдущем примере
}

function showArrUnderscore2(arr, block) {
    block.textContent = arr.join('_');// вывод в блок пишите как в предыдущем примере
}

document.querySelector('.b-14').addEventListener('click', function () {
    t14([3, 4, 5], showArrSpace2, out14);
    // попробуйте также вместо showArrSpace2 поставить showArrUnderscore2
})
/////////////////////////////////////////////////////////////////////////////////////
const out15 = document.querySelector('.out-15');

function t15(num, even, odd) {
    if (num % 2 == 0){
        even();
    } else odd();
}

function showOne() {
    out15.innerHTML = 'even';
}

function showTwo() {
    out15.innerHTML = 'odd';
}


document.querySelector('.b-15').addEventListener('click', function () {
    t15(3, showOne, showTwo);
})
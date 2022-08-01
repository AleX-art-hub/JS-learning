// let a = 8;
// let b = "Java Script";
// console.log(a,b);

const inputIn = document.querySelector(".input-in");
const inputIn2 = document.querySelector(".input-in2");
const btn = document.querySelector('button');
const div = document.querySelector('.out');
const div2 = document.querySelector('.out2');

btn.onclick = function (){
    console.log("Пашет");
    // console.log(inputIn.value);
    const q = +inputIn.value; // Если поставить + перед input то будет понимать как число
    const w = inputIn.value;
    console.log(q*60);
    console.log(q);
    console.log(q + 25);
    console.log(w + 15);
    div.innerHTML=inputIn.value;
    inputIn.value='';
    div2.innerHTML=inputIn2.value;
    inputIn2.value='';
}

// ======= DZ =======

// 1.Создайте две переменные a = 7 и b = 9.
//Выведите в консоль результа умножения a на b.

    const a=7;
    const b=9;
    console.log(a*b);

// 2.Создайте две переменные c = 7 и d = 9.
//Выведите на страницу результат деления c на d.

const c=7;
const d=9;
const enter = document.querySelector('.enter');
enter.innerHTML= (c/d);

// 3.Создайте две переменные e = 3 и f = 5.
//Выведите на страницу результат сложения e + f.

const e = 3;
const f = 5;
const enter2 = document.querySelector('.enter2');
enter2.innerHTML= (e+f);
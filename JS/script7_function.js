const out = document.querySelector(".out");
function one(){
    return out.innerHTML = "Function is work!!!"
}
one(); // <----вызываем функцию и выведет её сразу



//============================================
const out1 = document.querySelector(".out1");
const btn = document.querySelector(".f-1");
// function two(){
//     return out1.innerHTML = "Function is very good work!!!"
// }

//btn.onclick = two;// <----вызываем функцию событием onclick и выведет её по нажатию на кнопку

// btn.onclick = function(){ // <---анонимная функция
//     return out1.innerHTML = "Function is very good work!!!"
// }
btn.onclick = () => { // <---- стрелочная анонимная функция
    return out1.innerHTML = "Function is very good work!!!"
}


// Анонимная функция
const out2 = document.querySelector(".out2");
const btn1 = document.querySelector(".f-2");
btn1.onclick =function(){
    return out2.innerHTML = "Анонимная функция"
}
// Анонимная стрелочная функция
const out3 = document.querySelector(".out3");
const btn2 = document.querySelector(".f-3");
btn2.onclick =()=>{
    return out3.innerHTML = "Анонимная стрелочная функция"
}
//==============
// function (a, b){};
(a,b)=>{}//<--Эта функция равна верхней
//==============



// function(a){
//     return 73*a;
// }
(a)=>"hello"*a;

//==================================
function three(){
    console.log("work!!!!!");
    return 54
}
three();
console.log(2*three());


//==================================
let a = 8;
let b = 9;
function four(){
    console.log(a*b);
    return a*b;
}
let c1 = four();
let c2 = 5*four();
console.log(c1,c2);

function four2(x,y){
    return x*y;
}
console.log(four2(5,5));
console.log(four2(7,9));
console.log(four2(7,a));
console.log(four2(b,9));



// ================ DZ ==============

// 1. Напишите функцию t1, которая при нажатии
// кнопки выводит в .out-1 переменную a1.

// =============== Вариант 1 ====================
const out4 = document.querySelector(".out4");
const btn4 = document.querySelector(".btn");
const a1 = 88;
btn4.onclick = ()=>{
    return out4.innerHTML = (a1)
}


// =============== Вариант 2 ====================
// btn4.onclick = function a22(a2){
//     return out4.innerHTML = (a2 = 88);
// }

// =============== Вариант 3 ====================
// function a33(a2,a4){
//     return  a2 * a4;
// }
// btn4.onclick = out4.innerHTML = a33(7,8);

// 2. Изменим задачу 1. Сейчас она только выводит переменную
// в заранее заданный блок. Давайте сделаем так, чтобы функция,
// была более гибкой. Пусть теперь функция t2
// возвращает (return) переменную a2.Поскольку функция
// возвращает переменную, то имя функции со скобками (вызов функции)
// можно встраивать в выражения. Обратите внимание,
// как изменяется вызов функции теперь.
const out5 = document.querySelector(".out5");
const btn5 = document.querySelector(".btn1");

function t2 (a2){
    return a2
}
out5.innerHTML = (t2(2));


// 3. Наша предыдущая функция, сильно все еще зависима
// от внешних переменных. Давайте сделаем ее более универсальной.
// Пусть функция t3 принимает 2 аргумента и
// возвращает (return) их произведение.
// Допишите код функции так, чтобы она возвращала
// произведение двух чисел, переданных ей в качестве
// аргументов a, b. Протестируем функцию на двух примерах,
// с помощью кнопок .b-3-1 и .b-3-2.
const out6 = document.querySelector(".out6");
const btn6 = document.querySelector(".btn2");

btn6.onclick = function t33(x,y){
    x=prompt("Введите число");
    y=prompt("Введите число");
    return out6.innerHTML = x*y
};
// function t3(x){
//     return 5
// }
// function t33(z){
//     return 3
// }
// out6.innerHTML = t3()* t33();

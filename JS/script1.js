// Вывод в консоль и т.д.

console.log('Hello!');
console.log('World');
console.log(356);
console.log('Hello' + 'world'); //конкатенация без пробела
console.log('Hello'+' '+'world'); //конкатенация с пробелом
console.log("hello "+"world");
console.log("hello"+" world");
// alert("hello");
// alert("world");
// alert("and");
// alert("AleX");
// alert("Hello"+" "+"world"+" "+"and"+" "+"AleX)))");

const out = document.getElementById("out").innerHTML = "Audi A6 C5 S-Line";
const but = document.querySelector(".but").innerHTML = new Date(1995, 7, 21, 8, 8, 28);
const because = document.querySelector(".because").innerHTML = 2103958563945;
const before = document.getElementById('before').innerHTML = true;
const after = document.querySelector('.after').innerHTML = false;

const h2 = document.querySelector("h2.header").innerHTML = 5;// Ещё один вариант ниже
const h3 = document.querySelector(".header").innerHTML = 15;

const one = document.querySelector("#one").innerHTML = 777;// Ещё один вариант ниже
const one1 = document.getElementById("one").innerHTML = 878;

let a = document.querySelector("#one");
a.innerHTML = "5*5*5*5*5*5*5";

const b = document.querySelector('.after');
b.style.background = "red";

const c = document.getElementById("before");
c.style.background = "green";

// ============== DZ ==============

console.log("AleX");// Выведите в консоль ваше имя.
console.log(new Date(1995,2,21,4,28));// Выведите в консоль номер месяца в котором вы родились. Изучите чем отличается вывод числа и строки.
console.log(03);
console.log("Welcome "+"to "+"courses"); // Выведите в консоль строку: 'Добро '+'пожаловать '+' на курс'
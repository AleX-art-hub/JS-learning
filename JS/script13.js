let a = {
    "a":5,
    "b": 'Hello',
    "z":"hi",
    y43: 1999,
    "Villa da": 2800,
};
a.qqq = 5555;
a.b = "My"
delete a.a;
console.log(a)
console.log(a.z)
//let k = a.y43;// можно так
let k = 'y43';// можно и так
console.log(a[k]);

//===================================
const out4 = document.querySelector("#out4");
let out = '';
for(let key in a ){
    out += key + " --- " + a[key] +"<br>";
}
out4.innerHTML = out;


// 1.При нажатии b-1 выполняете функцию f1.
//Функция должна вывести в out-1 значение сохраненное
//под ключем two из массива a1. Возвратите это значение.

const btn1 = document.querySelector(".btn1");
const out1 = document.querySelector(".out1");
let a1 = {
    "one" : 15,
    "two" : 16,
    "five" : 20
    };
/*btn1.onclick =*/ function f1 (){
    return out1.innerHTML = a1.two
}
btn1.onclick = f1


// 2.При нажатии b-2 выполняете функцию f2.
//Функция должна вывести в out-2 значение hi из массива a2.
//Возвратите это значение.
let a2 = {
    "one" : "hello",
    "two" : "mahai",
    "five" : "hi"
    };
const btn2 = document.querySelector(".btn2");
const out2 = document.querySelector(".out2");
let f = "five"
btn2.onclick = function f2(){
    return out2.innerHTML = a2[f]
}

// 3.При нажатии b-3 выполняете функцию f3.
//Функция должна вывести в out-3 значение hi из массива a3.
//Возвратите это значение. Вывод - через пробел.
const btn3 = document.querySelector(".btn3");
const out3 = document.querySelector(".out3");
let a3 = {
    "one"  : "name,",
    "two"  : "Velikiy",
    "three": "my",
    "four" : "AleX",
    "five" : "Hi,"
}
btn3.onclick = function f3(){
    a3.one = "Lord";
    a3.three = "Voldemort";
    a3.two = "I";
    a3.four = "am";
    return out3.innerHTML = a3.five + " " + a3.two + " " + a3.four + " " + a3.one + " " + a3.three + "!!!!"
    // return out3.innerHTML = a3.five + " " + a3.three + " " + a3.one + " " + a3.four + " " + a3.two
}

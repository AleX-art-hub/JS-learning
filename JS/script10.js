let name = "AleX";
let age = "27";
let sign = "Овен";
let array = ["AleX", 27, "Овен"];
let arr = [];
console.log(array[0]);// выводит определенное значений в массиве
console.log(array)// выводит весь массив
console.log(array.length)// выводит кол-во значений в массиве


let a = [1,2,3,4];
console.log(a);
a[0] = 8;
console.log(a);
let t = a[0]
a[0] = a[3];
let temp = 1
a[3] = temp;
console.log(a);
a[0] = a[a.length-1];
a[a.length-1] = t-1;
console.log(a)
a[0] = 5;
a[4] = 4;
a[5] = 6;
console.log(a[888]);

let out4 = document.querySelector(".out4");
// for (let i = 0; i < a.length; i++){
//     out4.innerHTML += a[i] + " ";
// }

let out11 = "";
for (let i = 0; i < a.length; i++){
    if(a[i] % 2 == 0)// выводит тольео четные
    out11 += a[i] + "-";
}
out4.innerHTML  = out11;

//============ Выводим максимальное значение
let b = [4,2,5,23,43,1,2,6,12];
let max = b[0];
for(let i = 0 ; i< b.length; i++){
    if(b[i] > max ){// что б узнать минимальное число, просто поменять знак
        max = b[i]
    }
}
console.log("max " + max)

//============ Выводим сумму массив
let sum = 0;
for(let i = 0 ; i< b.length; i++){
        sum = sum + b[i]
}
console.log("сумма " + sum)


// 1.Создайте массив ar1 содержащий строки, числа,
//булевы значения. Выведите его в .out-1.
//Вывод - по нажатию кнопки b-1
const out1 = document.querySelector(".out1");
const btn1 = document.querySelector(".btn1");
const ar1 = ["hello", 21, 15, 88, true, false];
//==========Вариант 1
btn1.onclick = ()=>{
    return out1.innerHTML = ar1;
}
//==========Вариант 2
// function f2() {
//     return out1.innerHTML = ar1;
// }
// btn1.onclick = f2;

// 2.Создайте массив ar2 содержащий строки, числа,
//булевы значения. Выведите его в div.out-2.
//Используйте шаблон вывода из кода в JS.
//Вывод - по нажатию кнопки b-2.
const out2 = document.querySelector(".out2");
const btn2 = document.querySelector(".btn2");
const div1 = document.createElement("div");
const ar2 = [2,3,true,71,"stroka", false, 21];
div1.classList.add("out-3");
btn2.onclick = ()=>{
    return div1.innerHTML = ar2;
}
out2.appendChild(div1);

// 3.Создайте массив ar3, заполните его любыми значениями.
// Выведите длину массива.
const ar3 = [2,3,true,71,"stroka", false, 21];
console.log(ar3.length)
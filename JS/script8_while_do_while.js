//============================
for (let i = 0; i<6; i++ ){
    console.log(i)
}

//============================
let l = 0
while(l<5){
    l++
    console.log("l: " +l)
}
//==== Сумма чисел от 1 до 10
let sum = 0;
let p =0;
while(p <=10){
    sum = sum +p;
    p++;
}
console.log("sum = " +sum);

//===============
const out44 = document.querySelector(".out44");
p=0;
let outstr = ""
let flag = 6;


while(p<6){
    let p1 = 0;
    while(p1<7){
        if(p1 < flag){
            outstr += "&nbsp"
        }
        else{
            outstr +="*"
        }
        p1++
    }
    flag--;
    outstr += "<br>"
    p++

}
out44.innerHTML = outstr;






// ========= Задача 1
// Кнопка b-1 запускает функцию t1.
// Функция должна выводить в .out-1
// строку вида (... это просто для сокращения здесь.
// Вы выводите все числа от 1 до 50. Все.
// Три точки мы не выводим!!!!!)
//1_2_3_4_5_6_7_8_9_ ... 49_50_

const btn1 = document.querySelector(".btn1");
const out11 = document.querySelector(".out11");
function t1(){
    let out21 = "";
    for(let i=1; i<=50; i++){
        out21 += i +"_"
    }
    out11.innerHTML = out21;
}
btn1.onclick= t1;


// ========= Задача 2
//Кнопка b-2 запускает функцию t2.
//Функция должна выводить в .out-2 строку вида
//(вы выводите все числа с шагом 2 без пропуска.
//Три точки не выводите! Пропуска чисел с 6 по 44 нет. ):
//    2_4_6_ ... 44_46_

//от 2 до 46 c шагом 2. Разделитель - нижнее подчеркивание.
//Задача решается с помощью цикла while.

const btn2 = document.querySelector(".btn2");
const out24 = document.querySelector(".out22");

function t2(){
    let out21 = ""
    let i = 2;
    while(i<=46){
        i=i+2;
        out21 += i+"_"
    }
    out24.innerHTML = out21;
}
btn2.onclick = t2;

// ========= Задача 3
//Кнопка .b-3 запускает функцию t3. Функция должна
//выводить в .out-3 строку вида:
//25_24_23_22_21_20_19_18_17_16_15_14_13_12_11_10_9_8_7_
//от 25 до 7 c шагом 1. Разделитель - нижнее подчеркивание.
//Задача решается с помощью цикла while.
const btn3 = document.querySelector(".btn3");
const out33 = document.querySelector(".out33");
function t3(){
    let out20 = "";
    let i = 26;
    while (i>7){
        i--;
        out20 += i+"_"
    }
    out33.innerHTML = out20;
}
btn3.onclick = t3;
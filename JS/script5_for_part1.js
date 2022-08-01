// ======== Циклы for, while==========


// счетчик +1 к i
// for(let i = 0; i <= 6; i++) {
//     console.log(i);
// }console.log("===============================");
// // счетчик +2 к i
// for(let i = 0; i <= 6; i=i+2) {
//     console.log(i);
// }console.log("===============================");
// //счетчик -1 от a
// for(let a = 10; a >= 0; a--) {
//     console.log(a);
// }console.log("===============================");
// //счетчик -2 от a
// for(let a = 10; a >= 0; a=a-2) {
//     console.log(a);
// }console.log("===============================");

// for(let i = 0; i <= 6; i++) {
//     if(i == 4) break;
//     console.log(i);
// }console.log("===============================");


// ===============================
// const div = document.querySelectorAll('.one');
// console.log(div);
// //div.style.background = "green";
// for (let i = 0; i<div.length; i=i+1){
//    div[i].style.background = 'green'
//    div[1].onclick = two;
//    div[i].style.color = "white";
// }

// function two(){
//     return div[1].innerHTML = "555";
// }

// const b = document.getElementsByClassName('one')
// const c = document.getElementsByTagName('div')
// console.log(b);
// for(let i = 0; i< b.length; i++){
//     b[i].style.border = "3px solid black"
// }


const btn = document.querySelector("button").onclick = () => {
    const r = document.querySelectorAll('input[type="radio"]')
    // const out = document.querySelector("#out")
    for(let i = 0; i< r.length; i++){
        if (r[i].checked){
            console.log(r[i].value);
        }
    }
}

let out = "";
for (let i = 0; i<= 10; i++){
    if(i == 6); //continue;
    out += i +" ";
    // if(i == 6) break;
}
document.querySelector("#out").innerHTML = out;


// ============ DZ ================

// 1.Кнопка .b-1 запускает функцию t1.
// Функция должна выводить в .out-1 строку вида:
// 1_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_
// const out1 = document.querySelector('.out-1');
const btn1 = document.querySelector(".out1");

btn1.onclick = () =>{
    let out11 = "";
    for( let i = 1; i <= 20; i++){
        if(i == 17) break;
        out11 += i + "_";
    }
    document.querySelector('.out-1').innerHTML = out11;
}


// 2.Кнопка .b-2 запускает функцию t2.
// Функция должна выводить в .out-2 строку вида:
// 12_14_16_18_20_22_24_26_28_30_32_34_36_38_

const btn2 = document.querySelector('.out2');
const out2 = document.querySelector('.out-2');
btn2.onclick = ()=> {
    let out11 = "";
    for (let i = 12; i <=38; i=i+2){
        out11 += i+"_";
    }
    out2.innerHTML = out11;
}


// 3.Кнопка .b-3 запускает функцию t3.
// Функция должна выводить в .out-3 строку вида:
// 25_24_23_22_21_20_19_18_17_16_15_14_13_12_11_10_9_8_7_
const btn3 = document.querySelector('.out3');
const out3 = document.querySelector('.out-3');

btn3.onclick = () =>{
    let out11 = "";
    for (let i = 25; i>=7; i--){
        out11 += i+"_";
    }
    out3.innerHTML = out11;
}
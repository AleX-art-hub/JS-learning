let par = document.getElementsByTagName('p')
let qp = document.querySelectorAll('p')
console.log(qp)
console.log(par)

let arr = [4,7,6,9];
console.log(arr)
// ====== 1 ======
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// ====== 2 ====== в это случае выводит индексы массива
// for(let key in par){
//     console.log(par[key])
// }

// ====== 3 ====== в это случае выводит значения массива
// for(let item of par){
//     console.log(item)
// }


// =============== DZ ================

// 1.При нажатии .b-1 выполняете функцию f1.
//Функция перебирает массив a1 c помощью цикла
//for (let i. Выведите на страницу в .out-1 формате значение+пробел.
const btn1 = document.querySelector('.btn1')
const out1 = document.querySelector('.out1')
let a1 = [1,5,9,'string', true]
btn1.onclick = function(){
    let out = "";
    for (let i = 0; i<a1.length; i++){
        out += a1[i]+" ";
    }
    out1.innerHTML = out;
}

// 2.При нажатии .b-2 выполняете функцию f2.
//Функция перебирает массив a2 c помощью цикла
//for (let i. Выведите на страницу в .out-2 формате
//индекс+пробел+значение+пробел.
const btn2 = document.querySelector('.btn2')
const out2 = document.querySelector('.out2')
let a2 = [9,8,7,10,55]
btn2.onclick = function (){
    let out = "";
    for(let i = 0; i<1; i++){
        for (let k=0; k<a2.length; k++){
            out += `${k}:${a2[k]};</br> `
            console.log(a2[k])
        }

    }
    out2.innerHTML = out
}
// 3.При нажатии .b-3 выполняете функцию f3.
//Функция получает div.out-3 со страницы с помощью
//getElementsByClassName и в каждый записывает число 3,
//перезаписывая содержимое div.
const btn3 = document.querySelector('.btn3')
btn3.onclick = function(){
    const out3 = document.getElementsByClassName('out3')
    for(let item of out3){
        item.innerText = '3';
    }
}

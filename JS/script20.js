const block1 = document.querySelector(".block-1")
const block2 = document.querySelector(".block-2")
const out1 = document.querySelector(".out-1")
const out2 = document.querySelector(".out-2")

block1.addEventListener("touchstart" , myTouch);
block1.addEventListener("touchend" , myTouchEnd);
block2.addEventListener("touchmove", myTouchMove);

function myTouch(event){
    out2.innerHTML += "work "
    out1.innerHTML = event.touches.length
}

function myTouchEnd(event){
    out2.innerHTML += "end "
}

function myTouchMove(event){
    event.preventDefault();
    console.log(event);
    out2.innerHTML += "move ";
    return false
}


// ======================Zadachi=============


//Создайте блок div-1. Добавьте на него событие touchstart.
// Выведите в out-1 слово touch если событие сработает.
const div1 = document.querySelector(".div-1")
const out11 = document.querySelector('.out-11')
div1.addEventListener("touchstart", myTouchS)
function myTouchS(event){
    out11.innerHTML += "touch "
}


//Создайте блок div-2. Добавьте на него событие touchstart.
// Выведите в out-2 число срабатываний события.
const div2 = document.querySelector(".div-2")
const out22 = document.querySelector('.out-22')
div2.addEventListener("touchstart", myTouchSt)
let out = 1;
function myTouchSt (event){
    out22.innerHTML = out++
}

//Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart.
// Выведите в out-3 номер блока 1 или 2 на котором сработало событие.
const div3 = document.querySelector(".div-3")
const out33 = document.querySelector('.out-33')
const block31 = document.querySelector('.block31')
const block32= document.querySelector('.block32')

block31.addEventListener("touchstart", myTouchSta)
function myTouchSta (event){
    out33.innerHTML = block31.textContent
}
block32.addEventListener("touchstart", myTouchStar)
function myTouchStar(event){
    out33.innerHTML = block32.textContent
}


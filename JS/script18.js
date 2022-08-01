const one1 = document.querySelector(".one1")
const two2 = document.querySelector(".two2")
const three3 = document.querySelector(".three3")
one1.onclick = function(event){
    console.log(event)
    console.log("Click")
}

// document.querySelector(".two2").onclick = function(){
//     console.log("Click_2")
// }
two2.ondblclick =()=>{
    console.log("Double_Click_2")
}

document.querySelector(".two2").oncontextmenu = function(){
    console.log("Вызвали правой КМ")
    return false
}


// let w = 75;
// three3.onmousemove = ()=>{
//     // console.log("Навёл")
//     document.querySelector(".three3").style.width= w + "px";
//     w++
// }

document.querySelector(".three3").onmouseenter = ()=>{
    document.querySelector(".three3").style.background = "green"
    console.log("1")
}
document.querySelector(".three3").onmouseleave = ()=>{
    document.querySelector(".three3").style.background = "red"
    console.log("2")
}
document.querySelector(".three3").onmousedown = ()=>{
    document.querySelector(".three3").style.background = "orange"
    console.log("3")
}
document.querySelector(".three3").onmouseup = ()=>{
    document.querySelector(".three3").style.background = "blue"
    console.log("4")
}

const btn = document.querySelector("button")
let p = 10;
btn.onclick = ()=>{
    p= p+10
    document.querySelector('progress').value = p ;
}


// ================== Задачи в видео на 22:25 =====================

// =============== Задача 1 ===============
// Добавьте на блок .div-1 событие клик и по клику запуск функции t1.
// Функция должна возвращать и выводить на экран содержимое блока (только текст).
// Вывод осуществляется в out-1.
const div1 = document.querySelector(".div-1");
const out1 = document.querySelector(".out-1");
/*div1.onclick =*/ function t1(){
    return out1.innerHTML = div1.textContent + " при нажатии сюда"
}
div1.onclick = t1;

// =============== Задача 2 ===============
// Добавьте на блок .div-2 событие клик и по клику запуск функции t2.
// Функция должна возвращать true или false в зависимости от того,
// нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат.
// Вывод осуществляется в out-2.
const div2 = document.querySelector(".div-2");
const out2 = document.querySelector(".out-2");
/*div2.onclick =*/ function t2(e){
    if(e.altKey == true){
        return out2.innerHTML = "Нажата"
    }else {
        return out2.innerHTML = "Не нажата"
    }
}
div2.onclick = t2;

// =============== Задача 3 ===============
// Добавьте на блок .div-3 событие клик.
// При клике - увеличивайте ширину блока на 5px.
// Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px.
// Ширину выводите в out-3.
const div3 = document.querySelector(".div-3");
const out3 = document.querySelector(".out-3");
let w = 120;
div3.onclick = function t3(e){
    w=w+5
    console.log(div3.style.width = w + "px")
    return out3.innerHTML = div3.style.width = w + "px"
}

// =============== Задача 4 ===============
// Добавить на блок .div-4 событие двойной клик и по двойному клику запуск функции t4.
// Функция должна возвращать и выводить на экран содержимое блока (только текст).
// Вывод в out-4
const div4 = document.querySelector(".div-4");
const out4 = document.querySelector(".out-4");
div4.ondblclick = function t4(){
    return out4.innerHTML = div4.textContent
}
// =============== Задача 5 ===============
// Дан блок .div-5.active.
// Добавьте на него событие двойной клик, по которому удаляется класс .active если он есть
// и добавляеться если его нет
const div5 = document.querySelector(".div-5");
div5.ondblclick = function(){
    if(div5.classList.contains("active") == true){
        div5.classList.remove("active")
        alert("Удалили класс")
    } else {
        div5.classList.contains("active") == false
        div5.classList.add("active")
        alert("Добавили класс")
    }
}
// =============== Задача 6 ===============
// Дан блок .div-6 и списки .ul-6. При двойном клике на блоке скрывайте .ul-6 если он показан
// и показать если скрыт. Скрытие и показ делайте через добавление и удаление класса .hide
const div6 = document.querySelector(".div-6");
const ul = document.querySelector(".ul-6");
const hide = document.querySelector(".hide");

div6.ondblclick = function(){
    // Вариант 1 ==========
    if(hide.style.opacity == 0){
        hide.style.opacity = 1
    }else{hide.style.opacity = 0}
    // Вариант 2 ==========
    if(hide.style.display == "block"){
        hide.style.display = "none"
    }else{
        hide.style.display = "block"
    }
}

// =============== Задача 7 ===============
// Дан блок .div-7. При клике правой КМ на блоке добавляйте класс .active.
// При повторном нажатии удалить блок .active
const div7 = document.querySelector(".div-7");
let out = ''
div7.oncontextmenu = function t7(){
    if(div7.classList.contains("active") == true){
        div7.classList.remove("active")
        div7.textContent ="Убарли класс"
    } else {
        div7.classList.contains("active") == false
        div7.classList.add("active")
        div7.textContent = "Добавили класс"
    }
    return false
}
// =============== Задача 8 ===============
// Дан checkbox .ch-8. повесьте на него событие onchange при котором на документе
// отключаеться клик правой КМ если checkbox выбран и отключаеться если не выбран
const checkbox = document.getElementById("ch-8")
const div8 = document.querySelector(".div-8");

checkbox.onchange = function(){
    if(checkbox.checked == true){
        div8.oncontextmenu = function(){
            return false
        }
    }else {
        div8.oncontextmenu = function(){
        return true}
    }

}

// =============== Задача 9 ===============
// Дан блок .div-9. Внутри блока - изображение 1.пнг.
// При клике ПКМ - меняеться изображение на 2.пнг
// Изменить src изображения

// =============== Задача 10 ===============
// Дан блок .div-10. Внутри блока - изображение 1.пнг.
// При наведении мыши (mouseenter) - меняйте изображение на 2.пнг
// =============== Задача 11 ===============
// =============== Задача 12 ===============
// =============== Задача 13 ===============
// =============== Задача 14 ===============
// =============== Задача 15 ===============
// =============== Задача 16 ===============
// =============== Задача 17 ===============
// =============== Задача 18 ===============
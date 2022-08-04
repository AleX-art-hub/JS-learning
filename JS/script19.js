// onkeypress - фиксируються на буквах и цифрах
document.querySelector(".i-1").onkeypress = function(event){
    console.log("=========keypress=========")
    console.log("charCode: " +event.charCode)
    console.log("code: " +event.code)
    console.log("charCode: " +event.keyCode)
    console.log("code: " +event.key)
    //console.log(event)
}
document.querySelector(".i-1").onkeydown = function(event){
    console.log("=========keydown=========")
    console.log("charCode: " +event.charCode)
    console.log("code: " +event.code)
    console.log("keyCode: " +event.keyCode)
    console.log("key: " +event.key)
    //console.log(event)
    if(event.key == 'CapsLock'){
        document.querySelector("#ch-1").checked = true;
    }
    else{
        document.querySelector("#ch-1").checked = false;
    }
}
document.querySelector(".i-1").onkeyup = function(event){
    console.log("=========keyup=========")
    console.log("charCode: " +event.charCode)
    console.log("code: " +event.code)
    console.log("keyCode: " +event.keyCode)
    console.log("key: " +event.key)
    //console.log(event)
}
document.querySelector(".i-2").onkeypress = function(event){
    console.log("=========keypress i-2=========")
    console.log("charCode: " +event.charCode)
    console.log("code: " +event.code)
    console.log("charCode: " +event.keyCode)
    console.log("code: " +event.key)
    //console.log(event)
    const arr = {
        q: "A",
        w: "l",
        e: "e",
        r: "X",
    }
    document.querySelector('.i-2').value += arr[event.key]
    return false
}

// ======================== Zadachi

//Дан input .i-1. Напишите функцию t1,
// которая выводит в .out-1 символ и возвращает его.
// Во всех последующих задачах - работаем с латиницей и цифрами.
const out1 = document.querySelector(".out-1")
document.querySelector(".in-1").onkeypress = function t1 (event){
    return out1.innerHTML += event.key
}

//Дан input .i-2. Напишите функцию t2,
// которая по событию onkeypress выводит в out-2
// числовой код символа (event.keyCode).
const out2 = document.querySelector(".out-2")
document.querySelector(".in-2").onkeypress = function t2 (event){
    return out2.innerHTML += event.keyCode+" "
}


//Дан input .i-3. Напишите функцию t3,
// которая выводит на страницу true если введен символ
// и false если цифра. Для определения - используйте keyCode.
const out3 = document.querySelector(".out-3")
const in3 = document.querySelector(".in-3")
in3.onkeypress = function t3 (event){
    console.log(event)
    if(event.keyCode >= 47 && event.keyCode <= 58 ){
        return out3.innerHTML = false
    }
    else{
        return out3.innerHTML = true
    }
}

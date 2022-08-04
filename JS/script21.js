let a = 8;
a= a*2;
try {
    document.querySelector(".test").innerHTML = a;
}
catch(err) {
    console.log(err);
    console.log(1);
    // throw new Error("oshibochka")
}
finally {
    console.log("Все сработало!!!")
}
console.log(a);
t1();

function t1 (){
    console.log("da nu na")
}

// ================= Zadachi =================
console.log('================= Zadachi 1 =================')
//Добавьте в код функции try catch так,
//чтобы вместо ошибки выводилось в out-1 цифра 1.
const out1 = document.querySelector(".out1")
try {
    document.querySelector(".abuda").innerHTML = 25
}
catch(error){
    error = 1
    out1.innerHTML = error
}
finally{
    console.log('Вместо ошибки выдало 1')
}
console.log('================= Zadachi 2 =================')
//Добавьте в код функции try catch так,
// чтобы вместо ошибки был вывод результата в out-2.
const out2 = document.querySelector(".out2")
let a3 = 5
try{
    document.querySelector(".abuda").innerHTML = 88
}
catch(error){
    out2.innerHTML = a3 + 3
}
finally{
    console.log("Вместо ошибки вывело результат")
}
console.log('================= Zadachi 3 =================')
//Добавьте в код функции try catch так,
// чтобы вместо ошибки был вывод результата в out-3.
// Если его нет - создавайте в коде. т.е. вы не знаете будет или нет он в html.
const out3 = document.querySelector(".out3")
let a4 = 5
try{
    document.querySelector(".aut") === true
        document.querySelector(".aut").innerHTML =  a4 + 100
    }
catch(error){
    out3.innerHTML = a3 + 50
}
finally{

}
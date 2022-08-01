//                      Операторы if, else and Switch

// const a = 8;

// if(a <= 9){
//     console.log(true);
// }else{
//     console.log(false);
// }



const btn = document.querySelector("button");
const input = document.querySelector(".age");

btn.onclick = function(){
    let num = +input.value;
    if(num >= 18 && num < 60){
        console.log(true);
    }else if(num > 60){
        console.log("100 лет жизни тебе)))");
    }
    else{
        console.log ("Иди подрости");
    }


    switch(num){
        case 16:
            console.log("Ещё ва года терпи");
            break;
        case 18:
            console.log("Теперь можно");
            break;
        default:
            console.log("OK");

    }
}

let b = 5;
console.log(b>3 || b<6); // &&- и  ||-или

// ===== DZ ======

// 1.При нажатии кнопки .b-1 срабатывает функция f1.
//Функция должна прочитать содержимое .i-1 и сравнить его
//с числом 4 (сравнение ==). Результат сравнения - true или false
//выведите в .out-1.

const b1 = document.querySelector('.b-1');
const out1 = document.getElementById('out-1');
const input1 = document.querySelector(".i-1");

b1.onclick = function f1 (){
    const num1 = +input1.value;
    if(num1 == 4){
        return out1.innerHTML = num1 + " равно 4"
        // console.log(num1 + " равно 4");
    }
    else{
        return out1.innerHTML = num1 + " не равно 4"
        // console.log(num1 + " не равно 4" );
    }
}

// 2.Даны две переменные a21 и a22. При нажатии кнопки .b-2,
//запускается функция f2. Функция должна сравнить переменные
// с помощью if else и вывести в .out-2 число, которое больше.
//Вариант равенства переменных не рассматриваем.


const input2 = document.querySelector(".i-2");
const input3 = document.querySelector(".i-3");
const btn2 = document.querySelector(".b-2");
const out2 = document.getElementById('out-2');
const ml = document.querySelector(".more-less");

btn2.onclick = function f2(){
    let a21 = input2.value;
    let a22 = input3.value;
    if( a21 > a22){
        return out2.innerHTML = a21 , ml.innerHTML = ">";
    }else if( a21 < a22){
        return out2.innerHTML = a22 ,  ml.innerHTML = "<";
    }else {
        return out2.innerHTML = "Равно!!!", ml.innerHTML = "=";
    }

}

// 3. Даны 2 input - .i-31 и .i-32, оба - input[type=number].
//При нажатии кнопки .b-3 срабатывает функция f3.
//Функция должна сравнить числа из input, вывести в .out-3 большее число.
//Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.
const input31 = document.querySelector(".i-31");
const input32 = document.querySelector(".i-32");
const btn3 = document.querySelector(".b-3");
const out3 = document.getElementById('out-3');

btn3.onclick = function f3(){
    if(+input31.value > +input32.value){
        return out3.innerHTML = input31.value;
    }else{
        return out3.innerHTML = input32.value;
    }
}
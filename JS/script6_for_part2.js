//  ============= Циклы в цикле ================
// ---------циклов может быть безконечно

// let out = document.querySelector(".out");
// for (let i = 0; i <5; i++){   // <-------- Цикл
//     out.innerHTML += "_";
//     for( let k = 0; k < 10; k++){      // <-------- внутренний цикл
//         out.innerHTML += "*";
//     }
//     out.innerHTML += "  "           //<-------- внешний цикл
// }

// let out22 = document.querySelector(".out-2");
// for(let i = 0; i <3; i++){
//     for(let k = 0 ; k<5; k++){
//         out22.innerHTML +=`*`
//     }
//     out22.innerHTML += "<br>";
// }

let out22 = document.querySelector(".out-2");
for(let i = 1; i <=5; i++){
    for(let k = 0 ; k<i; k++){
        out22.innerHTML +=`*`
    }
    out22.innerHTML += "<br>";
}


let out23 = document.querySelector(".out-3");
for(let i = 0; i <= 5; i++){
    for(let k = 5 - i ; k>=1; k--){
        out23.innerHTML +=`*`
    }
    out23.innerHTML += "<br>";
}



// ========== Задача 1
//С помощью вложенных циклов, нарисуйте строку: ***_***_***_
// где звездочкa рисуются с помощью внутреннего цикла
//  от 0 до 3, а "_" с помощью внешнего.

let out = document.querySelector(".out");
for (let i = 0; i <3; i++){
    for( let k = 0; k < 3; k++){
        out.innerHTML += "*";
    }
    out.innerHTML += "_"
}

// ========== Задача 2
// С помощью вложенных циклов, нарисуйте строку:

// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_

// Решить задачу с помощью вложенных циклов.
// Внешний цикл выводит цифру и перенос строки br,
// внутренний - *_, и после этого внешний - знак переноса.

let out1 = document.querySelector(".out1");
for (let i = 1; i <4; i++){
    out1.innerHTML += i + "<br>"
    for( let k = 0; k < 3; k++){
        out1.innerHTML += "*_";
    }
    out1.innerHTML +="<br>"
}

// ========== Задача 3

//С помощью вложенных циклов, нарисуйте строку:

//          *_*_*_
//          *_*_*_
//          *_*_*_
//          *_*_*_

//Решить задачу с помощью вложенных циклов.
//Внутренний цикл выводит *_, внешний цикл
//выводит перенос строки br.

let out2 = document.querySelector(".out2");
for (let i = 0; i <5; i++){
    for( let k = 0; k < 3; k++){
        out2.innerHTML += "*_";
    }
    out2.innerHTML += "<br>"
}

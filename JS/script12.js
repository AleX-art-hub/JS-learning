let a = [1,2,"My",5,"Name"];
let b = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
// console.log(b)

// for (let i = 0; i<b.length; i++){
//     console.log(b[i]);
//     let c = b[i]
//     for(let k=0; k<c.length; k++){
//         console.log(c[k])
//     }
// }
// for (let i = 0; i<b.length; i++){
//     // console.log(b[i]);
//     let c = b[i]
//     for(let k=c.length-1; k>=0; k--){
//         console.log(c[k])
//     }
// }
const out444 = document.querySelector('.out44');
let out44 ="";
for (let i = 0; i<b.length; i++){
    for(let k=0; k<b[i].length; k++){
        // console.log(b[i][k])
        out44 += b[i][k] + ", "
    }
    out44 += "<br>"
}
// out444.innerHTML = out44


let out55 ="";
for (let i = 0; i<b.length; i++){
    for(let k=0; k<b[i].length; k++){
        console.log(b[i][k])
        if(b[i][k] >= 4){
            out55 += b[i][k] + ", "
        }
    }
    out55 += "<br>"
}

out444.innerHTML = out55

let d = [1,0,0,0,0,0];
let k =0;

const out12 = document.querySelector(".out111");
const btn = document.querySelector(".btn111");
out12.innerHTML = d;
btn.onclick = function(){
    if(k+1 < 5){
    d[k] = 0;
    d[k+1] = 1;
    k++;
    }
    out12.innerHTML = d;
}

// 1.При нажатии b-1 выполняете функцию f1.
//Функция должна вывести в out-1 значение 55 из массива a1.
//Возвратите это значение.
const btn1 = document.querySelector(".btn1");
const out1 = document.querySelector(".out1");
const a1 = [
    [47,63,"hi",4],
    [55,"pups",8,2],
    [5,77,"my",10]
]
btn1.onclick = function f1(){
    return out1.innerHTML = a1[1][0]
}

// 2.При нажатии b-2 выполняете функцию f2.
//Функция должна вывести в out-2 значение hi из массива a2.
//Возвратите это значение.
const btn2 = document.querySelector(".btn2");
const out2 = document.querySelector(".out2");

btn2.onclick = function f2(){
    let out9 = ""
    for(let i = 0; i< a1.length; i++){
        for(let k = 0; k<a1[i].length; k++){
            if(a1[i][k] == "hi"){
                console.log("boom shakalaka")
                out9 += a1[i][k]
            }
        }
        return out2.innerHTML = out9
    }
}


// 3.При нажатии b-3 выполняете функцию f3.
//Функция должна вывести в out-3 значение my из массива a3.
//Возвратите это значение.
const btn3 = document.querySelector(".btn3");
const out3 = document.querySelector(".out3");

btn3.onclick = function f3(){
    let out10 = ""
    for(let i = 0; i< a1.length; i++){
        for(let k = 0; k<a1[i].length; k++){
            if(a1[i][k] === 'my'){
                out10 += a1[i][k]
                out3.innerHTML = out10
                }
            }
        }
    }
